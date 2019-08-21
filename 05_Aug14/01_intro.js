async function insertItem() {
  let item = { name: 'item name', value: 'item value' }
  let headers = { 'Accept': 'application/json', 'Content-Type': 'application/json' }
  let reqBody = { headers: headers, method: 'POST', body: JSON.stringify(item) }
  let res = await fetch('http://localhost:3088/insert', reqBody)
}

insertItem()
