import logging

from neo4j import GraphDatabase
from neo4j.exceptions import Neo4jError

import random_data as rd


class App:

    def __init__(self, uri, user, password):
        self.driver = GraphDatabase.driver(uri, auth=(user, password))

    def close(self):
        # Don't forget to close the driver connection when you are finished with it
        self.driver.close()

    def create_person(self,person_name,age,connected_to):
        with self.driver.session(database="neo4j") as session:
            # Write transactions allow the driver to handle retries and transient errors
            result = session.execute_write(
                self.create_person_and_return, person_name,age,connected_to)
            
    @staticmethod
    def create_person_and_return(tx, person_name,age,connected_to):
        # To learn more about the Cypher syntax, see https://neo4j.com/docs/cypher-manual/current/
        # The Reference Card is also a good resource for keywords https://neo4j.com/docs/cypher-refcard/current/
        query = (
            "CREATE (p1:Person { name: $person_name, age: $age, connected_to:$connected_to}) "
            "RETURN p1"
        )
        result = tx.run(query, person_name=person_name,age=age,connected_to=connected_to)
        try:
            return [{"p1": record["p1"]["name"]}
                    for record in result]
        # Capture any errors along with the query and data for traceability
        except Neo4jError as exception:
            logging.error("{query} raised an error: \n {exception}".format(
                query=query, exception=exception))
            raise
    





if __name__ == "__main__":
    # Aura queries use an encrypted connection using the "neo4j+s" URI scheme
    uri = "neo4j+s://75896199.databases.neo4j.io"
    user = "neo4j"
    password = "tlH7aeOFOCH0D6TUw6lwHWNmCZ11Crr6e1xCySho7m8"
    app = App(uri, user, password)

    person_nodes, hub_nodes, event_nodes = rd.create_data()
    for key in person_nodes:
        app.create_person(person_nodes[key]['name'],person_nodes[key]['age'],person_nodes[key]['connected_to'])
    # app.create_friendship("Alice", "David")
    # app.find_person("Alice")
    app.close()
