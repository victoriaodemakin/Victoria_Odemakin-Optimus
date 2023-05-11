/**Name : domian Module
 * Description:It creates a user-defined data type that can have optional constraints. Deprecated. To handle unhandled errors
 * Example: CREATE TABLE marksheet (
    student_id SERIAL PRIMARY KEY,
    first_name VARCHAR NOT NULL,
    last_name VARCHAR NOT NULL,
    email VARCHAR NOT NULL,
    marks_obtained INT NOT NULL, 
    CHECK (
        first_name !~ '\s'
        AND last_name !~ '\s'
    )
);

  */