

def get_information(records):
    for record in records:
        property_value = record.get("property_name")
        # print(property_value)

        # Iterating over all properties in the record
        for key in record.keys():
            value = record[key]
            print(key, value)

        # Accessing values using index
        node = record[0]

        property_value = node.get("property_name")
        print(property_value)

        # Iterating over all properties in the node
        for key in node.keys():
            value = node[key]
            print(key, value)

        # Accessing labels of the node
        labels = node.labels
        print(labels)