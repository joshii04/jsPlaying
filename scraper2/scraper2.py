import requests
from bs4 import BeautifulSoup

# URL of the webpage you want to scrape
url = 'https://webstartiom.com'

# Send a GET request to the URL
response = requests.get(url)

# Parse the HTML content of the page
soup = BeautifulSoup(response.text, 'html.parser')

# Find all <div> elements with class "v-list-item-title"
email_divs = soup.find_all('div', class_='v-list-item-title')

# Extract email addresses from the text content of these <div> elements
email_addresses = []
for div in email_divs:
    email_addresses.append(div.text.strip())

# Print the extracted email addresses
if email_addresses:
    for email in email_addresses:
        print(email)
else:
    print("No email addresses found on the webpage.")
