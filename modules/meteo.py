import requests
from config import API_KEY_OPENWEATHER

def get_meteo(city="Lomé"):
    url = f"https://api.openweathermap.org/data/2.5/weather?q={city}&units=metric&appid={API_KEY_OPENWEATHER}&lang=fr"
    response = requests.get(url).json()

    if response.get("cod") == 200:
        return {
            "ville": response["name"],
            "temperature": f"{response['main']['temp']}°C",
            "condition": response["weather"][0]["description"].capitalize()
        }
    else:
        return {"ville": city, "temperature": "N/A", "condition": "Ville introuvable"}
