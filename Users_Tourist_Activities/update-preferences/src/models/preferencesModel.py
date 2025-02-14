from src.config.db import Neo4jConnection

def update_preferences(user_id, activity_name, new_preference_value):
    query = """
    MATCH (user:User {id: $user_id})-[r:INTERACTED_WITH]->(activity:Activity {name: $activity_name})
    SET r.count = $new_preference_value
    RETURN activity.name AS activity, r.count AS updated_preference
    """
    neo4j = Neo4jConnection()
    result = neo4j.query(query, parameters={"user_id": user_id, "activity_name": activity_name, "new_preference_value": new_preference_value})
    return result
