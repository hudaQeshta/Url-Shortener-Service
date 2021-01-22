![alt text](https://ibb.co/Fq58s1g)

# Url-Shortener-Service
Full-Stack url shortener service

# Conceptual Questions: 

# 1. How would you test this service? 
There are many frameworks that could be used for testing, such as : Mocha js, Chai js and Jest, in my opinion Mocha js is the best choice. To be honest I'm not familiar with writing test cases, but I know some concepts about the testing pyramid, which indecates that there must be many unit tests, and less integration and End-to-End tests, I think the only test needed here is unit test to test functions and data fetching, and I look forward to know more about testing libraries and how to write test cases. 

# 2. What DB models would need to change to support multiple users? 
I would add only one DB model for roles, and permissions, also I would add a new field to the Url model to store the id of the user who requested the short link along with the url details in database. 

# 3. How can this service support 1000 concurrent requests? 
Since Node js is single threaded and based on asynchronous programming, then I would solve this problem by using javascript promises. Another way to solve this issue, is using Docker and kubernetes to have a copy of the service running on a different port, to serve as many clients as we want and also make the application run faster. 

# 4. What kind of database models do you think would cause an issue and why? 
I think Hierarchical model might cause some issues, because it is based on parent-child relationship.
