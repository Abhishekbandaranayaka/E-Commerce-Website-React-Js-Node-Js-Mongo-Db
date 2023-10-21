import React from "react";
import './DescriptionBox.css'
const DescriptionBox = () => {
    return (
        <div className="descriptionbox">
            <div className="descriptionbox-navigator">
                <div className="descriptionbox-nav-box">Description</div>
                    <div className="descriptionbox-nav-box fade">Reviews (122)</div>
            </div>
            <div className="descriptionbox-description">
              <p>This PL/SQL code creates a dynamic SQL statement and executes it using the EXECUTE IMMEDIATE statement. However, it's important to note that creating tables dynamically using PL/SQL should be used with caution,
                 as it can have security implications and should be handled carefully. It's typically 
                better to create tables using SQL DDL statements directly, as shown in the first example.
                </p>  
                <p>
                The SQL code above creates a table named user in the robotikka schema. It defines
                two columns, email and password, with their respective data types. The email column is set as the primary key.
                If you need to create a table using PL/SQL, you can use dynamic SQL in a PL/SQL block to execute the SQL statement. Here's an example: 
                </p>
            </div>
        </div>
    )
}

export default DescriptionBox