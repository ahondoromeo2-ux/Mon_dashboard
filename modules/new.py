import requests
from config import API_KEY_NEWS

def get_news(country="fr"):
    url = f"https://newsapi.org/v2/top-headlines?country={country}&apiKey={API_KEY_NEWS}&language=fr"
    response = requests.get(url).json()

    articles = []
    if response.get("status") == "ok":
        for article in response["articles"][:5]:  # On prend les 5 premières news
            articles.append({
                "titre": article["title"],
                "source": article["source"]["name"],
                "url": article["url"]
            })
    return articles
