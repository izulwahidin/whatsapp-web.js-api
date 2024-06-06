# Send Message

curl localhost:3000/api/send-message -d '{
"number":6282291322145,
"message":"lol"
}' -H "Content-Type: application/json"

# Send Media

curl localhost:3000/api/send-media -d '{
"number":6282291322145,
"mediaUrl":"https://via.placeholder.com/350x350.png"
}' -H "Content-Type: application/json"
