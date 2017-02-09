UPDATE products
SET
   name = COALESCE($2, name),
   description = COALESCE($3, description),
   price = COALESCE($4, price),
   imageUrl = COALESCE($5, imageUrl)
   
WHERE id = $1
RETURNING *;