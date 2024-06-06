<!-- Send Message -->
curl localhost:3000/api/send-message -d '{
   "number":6282291322145,
   "message":"lol"
}' -H "Content-Type: application/json"
