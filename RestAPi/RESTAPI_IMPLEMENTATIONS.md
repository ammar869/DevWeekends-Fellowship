localhost/users : it is for the browser , bcz it is the already rended page for the browser.
localhost/api/users/: for the other devices 

localhost/api/users/1
localhost/api/users/2
localhost/api/users/3
localhost/api/users/4

we donot dynamically do this , to write one by one

so we will write the 
localhost/api/users/:id ----> we call this dynamic path  parameters
this is the feature of the express

<ul>
   ${users.map((user)=>{`<li>${user.name}</li>`)}
</ul>

--------------Grouping -----------------------
We can group all of these requests how ?
