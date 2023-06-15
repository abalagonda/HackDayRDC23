#test comment
import logging

from neo4j import GraphDatabase
from neo4j.exceptions import Neo4jError

import random_data as rd
import random

class App:

    def __init__(self, uri, user, password):
        self.driver = GraphDatabase.driver(uri, auth=(user, password))

    def close(self):
        # Don't forget to close the driver connection when you are finished with it
        self.driver.close()

    # In - person

    def create_status_relationship(self,loc_name, status_name):
        with self.driver.session(database="neo4j") as session:
            # Write transactions allow the driver to handle retries and transient errors
            result = session.execute_write(
                self.create_status_relationship_and_return, loc_name, status_name)
            
    @staticmethod
    def create_status_relationship_and_return(tx, loc_name, status_name):
        # To learn more about the Cypher syntax, see https://neo4j.com/docs/cypher-manual/current/
        # The Reference Card is also a good resource for keywords https://neo4j.com/docs/cypher-refcard/current/
        query = (
            "MATCH (l1:Location{loc_name:$loc_name}), (s1:Status{status_name:$status_name})"
            "CREATE (l1)-[:CONNECTED_TO]->(s1)"
        )
        result = tx.run(query,loc_name=loc_name,status_name=status_name)

    # Collaborative

    def create_loc_relationship(self,person_id,loc):
        with self.driver.session(database="neo4j") as session:
            # Write transactions allow the driver to handle retries and transient errors
            result = session.execute_write(
                self.create_loc_relationship_and_return, person_id,loc)
            
    @staticmethod
    def create_loc_relationship_and_return(tx, person_id,loc):
        # To learn more about the Cypher syntax, see https://neo4j.com/docs/cypher-manual/current/
        # The Reference Card is also a good resource for keywords https://neo4j.com/docs/cypher-refcard/current/
        query = (
            "MATCH (p1:Person{id:$person_id}), (l1:Location{loc_name:$loc})"
            "CREATE (p1)-[:LOCATED_AT]->(l1)"
        )
        result = tx.run(query,person_id=person_id,loc=loc)
    
    def create_event_person_relationship(self,person_id,event_name):
        with self.driver.session(database="neo4j") as session:
            # Write transactions allow the driver to handle retries and transient errors
            result = session.execute_write(
                self.create_event_person_relationship_and_return, person_id,event_name)
            
    @staticmethod
    def create_event_person_relationship_and_return(tx, person_id,event_name):
        # To learn more about the Cypher syntax, see https://neo4j.com/docs/cypher-manual/current/
        # The Reference Card is also a good resource for keywords https://neo4j.com/docs/cypher-refcard/current/
        query = (
            "MATCH (p1:Person{id:$person_id}), (e1:Event{event_name:$event_name})"
            "CREATE (p1)-[:IS_AT]->(e1)"
        )
        result = tx.run(query,person_id=person_id,event_name=event_name)
    
    def create_event_location_relationship(self,loc_name,event_name):
        with self.driver.session(database="neo4j") as session:
            # Write transactions allow the driver to handle retries and transient errors
            result = session.execute_write(
                self.create_event_location_relationship_and_return, loc_name, event_name)
            
    @staticmethod
    def create_event_location_relationship_and_return(tx, loc_name,event_name):
        # To learn more about the Cypher syntax, see https://neo4j.com/docs/cypher-manual/current/
        # The Reference Card is also a good resource for keywords https://neo4j.com/docs/cypher-refcard/current/
        query = (
            "MATCH (l1:Location{loc_name:$loc_name}), (e1:Event{event_name:$event_name})"
            "CREATE (l1)<-[:IS_LOC_IN]-(e1)"
        )
        result = tx.run(query,loc_name=loc_name,event_name=event_name)
    


    def create_person(self,id,person_name,age,status,skills):
        with self.driver.session(database="neo4j") as session:
            # Write transactions allow the driver to handle retries and transient errors
            result = session.execute_write(
                self.create_person_and_return, id, person_name,age,status,skills)
    
    @staticmethod
    def create_person_and_return(tx,id,person_name,age,status,skills):
        # To learn more about the Cypher syntax, see https://neo4j.com/docs/cypher-manual/current/
        # The Reference Card is also a good resource for keywords https://neo4j.com/docs/cypher-refcard/current/
        query = (
            "CREATE (p1:Person { id:$id, name: $person_name, age: $age, status:$status,skills:$skills}) "
            "RETURN p1"
        )
        result = tx.run(query, id=id, person_name=person_name,age=age,status=status,skills=skills)
        try:
            return [{"p1": record["p1"]["name"]}
                    for record in result]
        # Capture any errors along with the query and data for traceability
        except Neo4jError as exception:
            logging.error("{query} raised an error: \n {exception}".format(
                query=query, exception=exception))
            raise

    def create_status_node(self,loc_name):
        with self.driver.session(database="neo4j") as session:
            # Write transactions allow the driver to handle retries and transient errors
            result = session.execute_write(
                self.create_status_node_and_return, loc_name)
            
    @staticmethod
    def create_status_node_and_return(tx, loc_name):
        # To learn more about the Cypher syntax, see https://neo4j.com/docs/cypher-manual/current/
        # The Reference Card is also a good resource for keywords https://neo4j.com/docs/cypher-refcard/current/
        query = (
            "CREATE (s1:Status { status_name:$status_name }) "
            "RETURN s1"
        )
        result = tx.run(query, status_name=loc_name)
        try:
            return [{"s1": record["s1"]["status_name"]}
                    for record in result]
        # Capture any errors along with the query and data for traceability
        except Neo4jError as exception:
            logging.error("{query} raised an error: \n {exception}".format(
                query=query, exception=exception))
            raise
    
    def create_loc_node(self,loc_name,genre):
        with self.driver.session(database="neo4j") as session:
            # Write transactions allow the driver to handle retries and transient errors
            result = session.execute_write(
                self.create_loc_node_and_return, loc_name,genre)
            
    @staticmethod
    def create_loc_node_and_return(tx, loc_name,genre):
        # To learn more about the Cypher syntax, see https://neo4j.com/docs/cypher-manual/current/
        # The Reference Card is also a good resource for keywords https://neo4j.com/docs/cypher-refcard/current/
        query = (
            "CREATE (l1:Location { loc_name:$loc_name,genre:$genre }) "
            "RETURN l1"
        )
        result = tx.run(query, loc_name=loc_name,genre=genre)
        try:
            return [{"l1": record["l1"]["loc_name"]}
                    for record in result]
        # Capture any errors along with the query and data for traceability
        except Neo4jError as exception:
            logging.error("{query} raised an error: \n {exception}".format(
                query=query, exception=exception))
            raise
    
    def create_event_node(self,event_name,status, loc):
        with self.driver.session(database="neo4j") as session:
            # Write transactions allow the driver to handle retries and transient errors
            result = session.execute_write(
                self.create_event_node_and_return, event_name, status, loc)
            
    @staticmethod
    def create_event_node_and_return(tx, event_name, status, loc):
        # To learn more about the Cypher syntax, see https://neo4j.com/docs/cypher-manual/current/
        # The Reference Card is also a good resource for keywords https://neo4j.com/docs/cypher-refcard/current/
        query = (
            "CREATE (e1:Event { event_name:$event_name, status:$status, loc:$loc }) "
            "RETURN e1"
        )
        result = tx.run(query, event_name=event_name, status = status, loc= loc)
        try:
            return [{"e1": record["e1"]["event_name"]}
                    for record in result]
        # Capture any errors along with the query and data for traceability
        except Neo4jError as exception:
            logging.error("{query} raised an error: \n {exception}".format(
                query=query, exception=exception))
            raise




if __name__ == "__main__":
    # Aura queries use an encrypted connection using the "neo4j+s" URI scheme
    uri = "neo4j+s://a6448757.databases.neo4j.io"
    user = "neo4j"
    password = "76S9fJfoVIBPAyCzfM3GQAFxHX2Xoh6Pw3SYRI-rkzE"
    app = App(uri, user, password)

    person_nodes, loc_nodes, status_nodes,status_list,event_nodes = rd.create_data()
    # Done
    for key in status_nodes:
        app.create_status_node(status_nodes[key]['name'])


    # Done
    for key in loc_nodes:
        app.create_loc_node(loc_nodes[key]['loc_name'],loc_nodes[key]['genre'])

    
    for key in event_nodes:
        app.create_event_node(event_nodes[key]['event_name'],event_nodes[key]['status'],event_nodes[key]['loc'])

    for key in person_nodes:
        app.create_person(person_nodes[key]['id'],person_nodes[key]['name'],person_nodes[key]['age'],person_nodes[key]['loc'],person_nodes[key]['skills'])



    for key1 in loc_nodes:
        print(loc_nodes[key1]['loc_name'])
        for key2 in event_nodes:
            if loc_nodes[key1]['loc_name'] == event_nodes[key2]['loc']:
                
                app.create_event_location_relationship(loc_nodes[key1]['loc_name'],event_nodes[key2]['event_name'])
            
    for key in person_nodes:
    # #     # app.create_person(person_nodes[key]['id'],person_nodes[key]['name'],person_nodes[key]['age'],person_nodes[key]['loc'])
        app.create_loc_relationship(person_nodes[key]['id'], person_nodes[key]['loc'])
        
        rand_val = random.randint(0,len(event_nodes)-1)
        print(person_nodes[key]['loc'])
        print(event_nodes[rand_val]['loc'])
        if person_nodes[key]['status'] == 'in_person':
            if event_nodes[rand_val]['status']=='in_person' and event_nodes[rand_val]['loc']==person_nodes[key]['loc']:
                app.create_event_person_relationship(person_nodes[key]['id'],event_nodes[rand_val]['event_name'])
                print("in_person")
        elif person_nodes[key]['status'] == 'remote':
            if event_nodes[rand_val]['status']=='remote':
                app.create_event_person_relationship(person_nodes[key]['id'],event_nodes[rand_val]['event_name'])
                print("remote")
        elif person_nodes[key]['status'] == 'collaborative':
            if event_nodes[rand_val]['status']=='collaborative' and event_nodes[rand_val]['loc']==person_nodes[key]['loc']:
                app.create_event_person_relationship(person_nodes[key]['id'],event_nodes[rand_val]['event_name'])
                print("collab")
        print()

            
    for key in status_list:
        for val in status_list[key]:
            app.create_status_relationship(val[0],key)

    app.close()




# MATCH p=(l1)<-[:IS_LOC_IN]-(e1) 
# MATCH q=(p1)-[:LOCATED_AT]->(l1) 
# MATCH r=(l1:Location)-[:CONNECTED_TO]->(s1:Status) 
# MATCH t=(p1:Person)-[:IS_AT]->(e1:Event)

# return p,q,r,t;