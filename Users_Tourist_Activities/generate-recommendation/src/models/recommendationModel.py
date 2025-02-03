from src.config.db import Neo4jConnection 

def get_recommendations(user_id):
    query = """
    MATCH (user:User {id: $user_id})-[r:INTERACTED_WITH]->(activity:Activity)
    RETURN activity.name AS activity, SUM(r.count) AS interactionCount
    ORDER BY interactionCount DESC
    LIMIT 5
    """
    neo4j = Neo4jConnection()
    result = neo4j.query(query, parameters={"user_id": user_id})
    return result
