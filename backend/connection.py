#test comment
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


    def create_status_relationship(self,person_id,status_name):
        with self.driver.session(database="neo4j") as session:
            # Write transactions allow the driver to handle retries and transient errors
            result = session.execute_write(
                self.create_status_relationship_and_return, person_id,status_name)
            
    @staticmethod
    def create_status_relationship_and_return(tx, person_id,status_name):
        # To learn more about the Cypher syntax, see https://neo4j.com/docs/cypher-manual/current/
        # The Reference Card is also a good resource for keywords https://neo4j.com/docs/cypher-refcard/current/
        query = (
            "MATCH (p1:Person{id:$person_id}), (s1:Status{status_name:$status_name})"
            "CREATE (p1)-[:CONNECTED_TO]->(s1)"
        )
        result = tx.run(query,person_id=person_id,status_name=status_name)
        # try:
        #     return [{"p1": record["p1"]["person_id"], "s1": record["s1"]["status_name"]}
        #             for record in result]
        # # Capture any errors along with the query and data for traceability
        # except Neo4jError as exception:
        #     logging.error("{query} raised an error: \n {exception}".format(
        #         query=query, exception=exception))
        #     raise


    def create_person(self,id,person_name,age,status):
        with self.driver.session(database="neo4j") as session:
            # Write transactions allow the driver to handle retries and transient errors
            result = session.execute_write(
                self.create_person_and_return, id, person_name,age,status)
            
    @staticmethod
    def create_person_and_return(tx,id,person_name,age,status):
        # To learn more about the Cypher syntax, see https://neo4j.com/docs/cypher-manual/current/
        # The Reference Card is also a good resource for keywords https://neo4j.com/docs/cypher-refcard/current/
        query = (
            "CREATE (p1:Person { id:$id, name: $person_name, age: $age, status:$status}) "
            "RETURN p1"
        )
        result = tx.run(query, id=id, person_name=person_name,age=age,status=status)
        try:
            return [{"p1": record["p1"]["name"]}
                    for record in result]
        # Capture any errors along with the query and data for traceability
        except Neo4jError as exception:
            logging.error("{query} raised an error: \n {exception}".format(
                query=query, exception=exception))
            raise

    def create_status_node(self,status_name):
        with self.driver.session(database="neo4j") as session:
            # Write transactions allow the driver to handle retries and transient errors
            result = session.execute_write(
                self.create_status_node_and_return, status_name)
            
    @staticmethod
    def create_status_node_and_return(tx, status_name):
        # To learn more about the Cypher syntax, see https://neo4j.com/docs/cypher-manual/current/
        # The Reference Card is also a good resource for keywords https://neo4j.com/docs/cypher-refcard/current/
        query = (
            "CREATE (s1:Status { status_name:$status_name }) "
            "RETURN s1"
        )
        result = tx.run(query, status_name=status_name)
        try:
            return [{"s1": record["s1"]["status_name"]}
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

    person_nodes, hub_nodes, status_nodes = rd.create_data()
    # for key in status_nodes:
    #     app.create_status_node(status_nodes[key]['name'])
    for key in person_nodes:
        # app.create_person(person_nodes[key]['id'],person_nodes[key]['name'],person_nodes[key]['age'],person_nodes[key]['status'])
        app.create_status_relationship(person_nodes[key]['id'],person_nodes[key]['status'])

    # app.create_friendship("Alice", "David")
    # app.find_person("Alice")
    app.close()
