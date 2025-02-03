from ariadne import ObjectType, QueryType, make_executable_schema
from src.models.recommendationModel import get_recommendations

ActivityRecommendation = ObjectType("ActivityRecommendation")

query = QueryType()


@query.field("recommendations")
def resolve_recommendations(_, info, userId): 
    recommendations = get_recommendations(userId)
    return [{"activity": rec['activity'], "interactionCount": rec['interactionCount']} for rec in recommendations]

type_defs = """
    type ActivityRecommendation {
        activity: String!
        interactionCount: Int!
    }

    type Query {
        recommendations(userId: String!): [ActivityRecommendation]!
    }
"""
schema = make_executable_schema(type_defs, query)
