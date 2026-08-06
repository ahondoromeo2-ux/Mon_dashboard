from openai import OpenAI
from config import API_KEY_OPENAI

client = OpenAI(api_key=API_KEY_OPENAI)

def analyse_texte(texte):
    response = client.responses.create(
        model="gpt-5.6",
        input=f"Analyse ce texte et donne un résumé : {texte}"
    )
    return {
        "texte_original": texte,
        "resume": response.output_text
    }
