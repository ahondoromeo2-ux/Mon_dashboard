from openai import OpenAI
from config import API_KEY_OPENAI

client = OpenAI(api_key=API_KEY_OPENAI)

def resume_texte(texte):
    response = client.responses.create(
        model="gpt-5.6",
        input=f"Fais un résumé clair et concis de ce texte : {texte}"
    )
    return response.output_text

def traduction_texte(texte, langue="en"):
    response = client.responses.create(
        model="gpt-5.6",
        input=f"Traduis ce texte en {langue} : {texte}"
    )
    return response.output_text

def sentiment_texte(texte):
    response = client.responses.create(
        model="gpt-5.6",
        input=f"Analyse le sentiment de ce texte (positif, négatif ou neutre) : {texte}"
    )
    return response.output_text

def creatif_texte(texte):
    response = client.responses.create(
        model="gpt-5.6",
        input=f"Transforme ce texte en une petite histoire créative : {texte}"
    )
    return response.output_text
