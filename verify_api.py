import requests

def verify_api():
    base_url = "http://127.0.0.1:8000"
    
    # 1. Create Item
    print("Creating item...")
    response = requests.post(f"{base_url}/api/v1/items/", json={"title": "Test Item", "description": "This is a test"})
    if response.status_code == 200:
        print("Create SUCCESS:", response.json())
        item_id = response.json().get("id")
    else:
        print("Create FAILED:", response.status_code, response.text)
        return

    # 2. Read Items
    print("Reading items...")
    response = requests.get(f"{base_url}/api/v1/items/")
    if response.status_code == 200:
        print("Read Items SUCCESS:", response.json())
    else:
        print("Read Items FAILED:", response.status_code, response.text)

    # 3. Read Item
    print(f"Reading item {item_id}...")
    response = requests.get(f"{base_url}/api/v1/items/{item_id}")
    if response.status_code == 200:
        print("Read Item SUCCESS:", response.json())
    else:
        print("Read Item FAILED:", response.status_code, response.text)

    # 4. Update Item
    print(f"Updating item {item_id}...")
    response = requests.put(f"{base_url}/api/v1/items/{item_id}", json={"title": "Updated Item", "description": "Updated description"})
    if response.status_code == 200:
        print("Update SUCCESS:", response.json())
    else:
        print("Update FAILED:", response.status_code, response.text)

    # 5. Delete Item
    print(f"Deleting item {item_id}...")
    response = requests.delete(f"{base_url}/api/v1/items/{item_id}")
    if response.status_code == 200:
        print("Delete SUCCESS:", response.json())
    else:
        print("Delete FAILED:", response.status_code, response.text)

if __name__ == "__main__":
    try:
        verify_api()
    except Exception as e:
        print("Verification failed:", e)
