from flask import Flask, jsonify
from flask_cors import CORS
from neo4j import GraphDatabase

app = Flask(__name__)
CORS(app)

driver = GraphDatabase.driver(
    "neo4j+s://a6448757.databases.neo4j.io", auth=("neo4j", "76S9fJfoVIBPAyCzfM3GQAFxHX2Xoh6Pw3SYRI-rkzE"))

@app.route('/api/location/<location_type>')
def get_location_nodes(location_type):
    with driver.session() as session:
        print(location_type)
        # # Run a Cypher query to retrieve data from Neo4j
        # result = session.run("MATCH (n:Person) RETURN n")

        # # Extract the relevant data from the query result
        # data = [record['n'].get('name') for record in result]

        # # Serialize the data and send as a response
        # return jsonify(data)
        # Run a Cypher query to retrieve data for nodes and relationships

        # Design

        #1. Take in user input (Remote, Collab, In-person)
        #2. Query and display subgraph based on input
            # -> i.e. In-person + building options
        #3. After user selects building option
            # -> Create connection between building and user
            # -> Display events and other people at building
        #4. After user clicks event
            # -> Creates connection between person and event

        

        # query = "MATCH (l:Location)-[r:CONNECTED_TO]->(s:Status {status_name: $location_type}) RETURN l, r, s"
        queryOne = "MATCH (l:Location)-[r:CONNECTED_TO] -> (s:Status {status_name: $location_type}) RETURN l, r, s"
        
        result = session.run(queryOne, location_type=location_type)
        # # Extract the relevant data from the query result
        nodes = []
        links = []
        
        nodes.append({'id': "in_person", 'shape': "image", 'title': "in_person", 'size': 20, "image": "https://upload.wikimedia.org/wikipedia/commons/5/5f/Microsoft_Office_logo_%282019%E2%80%93present%29.svg" })
        for record in result:
            # print(record)
            node = record['l']
            # print(node)
            link = record['r']
            target = record['s']
            # print(target)
            print("NODE", node)
            nodes.append({'id': node.get("loc_name"), 'shape': "image", 'title': node.get('loc_name'), 'size': 20, "image": "https://cdn.onlinewebfonts.com/svg/img_202252.png" })
            # nodes.append({'id': target.id, 'label': target.get('loc_name')})
            
            links.append({'from': node.get("loc_name"), 'to': target.get("status_name"), 'color': "blue"})
        
        data = {'nodes': nodes, 'links': links}
        
        # # Serialize the data and send as a response
        return jsonify(data)


@app.route('/api/eventsandpeople/<location>')
def get_events_and_people(location):
    with driver.session() as session:
        print(location)
        queryTwo = "MATCH (e:Event)-[r:IS_LOC_IN] -> (l:Location {loc_name: $location}) RETURN e, r, l"
        queryThree = "MATCH (p:Person)-[r:LOCATED_AT] -> (l:Location {loc_name: $location}) RETURN p, r, l"

        resultEvents = session.run(queryTwo, location=location)
        resultPeople = session.run(queryThree, location=location)
        # # Extract the relevant data from the query result
        events = []
        people = []
        linkEvents = []
        linkPeople = []
        
        for record in resultEvents:
            node = record['e']
            link = record['r']
            target = record['l']
            
            events.append({'id': node.get("event_name"), 'shape': "image", 'title': node.get('event_name'), 'size': 20, "image": None })
            
            linkEvents.append({'from': node.get("event_name"), 'to': target.get("loc_name"), 'color': "blue"})

        for record in resultPeople:
            node = record['p']
            link = record['r']
            target = record['l']
            
            people.append({'id': node.get("loc_name"), 'shape': "image", 'title': node.get('loc_name'), 'size': 20, "image": None })
            
            linkPeople.append({'from': node.get("name"), 'to': target.get("loc_name"), 'color': "blue"})
        
        data = {'events': events, 'people': people, 'linkEvents': linkEvents, 'linkPeople': linkPeople}
        # # Serialize the data and send as a response
        return jsonify(data)


if __name__ == '__main__':
    app.run()