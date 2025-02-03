from ariadne import ObjectType, MutationType, QueryType, make_executable_schema
from src.models.preferencesModel import update_preferences


query = QueryType()

ActivityRecommendation = ObjectType("ActivityRecommendation")


Mutation = MutationType()

@Mutation.field("updatePreferences")
def resolve_update_preferences(_, info):

    user_id = info.arguments.get("userId")  
    activity_name = info.arguments.get("activityName")  # 
    new_preference_value = info.arguments.get("newPreferenceValue") 
    

    result = update_preferences(user_id, activity_name, new_preference_value)
    
    return {"activity": result[0]["activity"], "updatedPreference": result[0]["updated_preference"]}


type_defs = """
    type ActivityRecommendation {
        activity: String!
        updatedPreference: Int!
    }

    type Query {
        dummyQuery: DummyType!
    }

    type Mutation {
        updatePreferences(userId: String!, activityName: String!, newPreferenceValue: Int!): ActivityRecommendation!
    }

    type DummyType {
        message: String!
    }
"""

schema = make_executable_schema(type_defs, query, Mutation)
