from flask import Flask, jsonify
from flask_cors import CORS
from neo4j import GraphDatabase

app = Flask(__name__)
CORS(app)

driver = GraphDatabase.driver(
    "neo4j+s://75896199.databases.neo4j.io", auth=("neo4j", "tlH7aeOFOCH0D6TUw6lwHWNmCZ11Crr6e1xCySho7m8"))


@app.route('/api/nodes')
def get_nodes():
    with driver.session() as session:
        # # Run a Cypher query to retrieve data from Neo4j
        # result = session.run("MATCH (n:Person) RETURN n")

        # # Extract the relevant data from the query result
        # data = [record['n'].get('name') for record in result]

        # # Serialize the data and send as a response
        # return jsonify(data)
        # Run a Cypher query to retrieve data for nodes and relationships
        result = session.run("MATCH (n: Person)-[r: LOCATED_AT]->(m: Location) RETURN n, r, m")
        
        # print("HIHIHIHI")
        # Extract the relevant data from the query result
        nodes = []
        links = []
        
        for record in result:
            print(record)
            node = record['n']
            link = record['r']
            target = record['m']
            # print(target)
            nodes.append({'id': node.id, 'title': node.get('name')})
            nodes.append({'id': target.id, 'label': target.get('loc_name')})
            
            links.append({'source': node.id, 'target': target.id, 'label': link.type})
        
        data = {'nodes': nodes, 'links': links}
        
        # Serialize the data and send as a response
        return jsonify(data)


if __name__ == '__main__':
    app.run()
