1>Write Mongo query to retrieve documents from the orders in ascending order by total.
sol>db.orders.aggregate([{$group:{_id:"$_id",totalOrder:{$sum:"$total"}}},{$sort:{totalOrder:1}}])

2>Write Mongo query to retrieve the oldest paymentMethod from the payments collection as "_id".
sol>db.payments.aggregate([{$group:{_id:"$paymentMethod"}},{$sort:{paymentMethod:1}},{$limit:1}])

3>Write Mongo query to retrieve 2nd and 3rd buyers from the buyers collection.
sol>db.buyers.aggregate([{$skip:1},{$limit:2}])

4>Write Mongo query to retrieve the most Expensive product from order_details.
sol>db.order_details.aggregate([{$sort:{price:-1}},{$limit:1}])

5>Write Mongo query to retrieve the first order from the orders as per the order_date.
sol>db.orders.aggregate([{$sort:{order_date:1}},{$limit:1}])

6>Write Mongo query to retrieve the last 3 orders from the orders collection who have less total amount.
sol>db.orders.aggregate([{$sort:{total:1}},{$limit:3}])

7>Write Mongo query to retrieve the most recent shipped order from the orders collection.
sol>db.orders.aggregate([{$sort:{ship_date:-1}},{$limit:1}])

8>Write Mongo query to get the total revenue from all orders
sol>customers> db.orders.aggregate([{$group:{_id:"totalRevenue",total_revenue:{$sum:"$total"}}}])

9>Write Mongo query to retrieve all the orders that shipped before 2022-05-26
sol>db.orders.aggregate([{$match:{ship_date:{$lt:"2022-05-26"}}}])

10>Write Mongo query to find the maximum price as maxPrice of products and their names as name for each category.
sol>db.products.aggregate([{$group:{_id:"category_id",maxPrice:{$max:"$price"}}}])

11>Write Mongo query to find Most used payment Method as paymentMethod and the number of time it is used as count.
sol>db.payments.aggregate([{$group:{_id:"$paymentMethod",paymentCount:{$sum:1}}},{$sort:{paymentCount:-1}},{$limit:1}])

12>Write Mongo query to find the total count of orders by status.
sol>db.orders.aggregate([{$group:{_id:"$status",totalCount:{$count:{}}}}])

13>Write Mongo query to retrieve the orders grouped by customer_id with the max total
sol> db.orders.aggregate([{$group:{_id:"$customer_id",maxtotal:{$max:"$total"}}},{$limit:1}])

14>.Assess the impact of RAM capacity on laptop prices and ratings. Group laptops by RAM capacity and analyze the average price and rating for each group. Identify any significant trends or outliers.

15>.Investigate the price and rating distribution for gaming laptops. Identify which brands are leading in the gaming laptop market by comparing the average price, rating, GPU type, and RAM capacity for laptops categorized as gaming.

16>.Analyze the warranty periods offered by different brands and their correlation with laptop prices and ratings. Identify any patterns or insights regarding how warranty periods influence consumer ratings and pricing strategies.

17>.Examine the relationship between processor brand (Intel, AMD, Apple) and laptop price, rating, and primary storage capacity. Group the laptops by processor brand and compare their average price, rating, and storage statistics to identify key differences.