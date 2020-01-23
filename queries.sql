Select s.CompanyName as SuppliedBy, p.ProductName, c.CategoryName
from product as p 
join supplier as s 
    on s.ID = p.SupplierId   
join category as c
    on p.CategoryId = c.Id   
where p.ID = 5


-- all employees and their order information if they have sold something
select e.FirstName, e.LastName, o.* 
from employee as e 
left join [order] as o 
    on o.EmployeeId = e.Id
order by e.id;