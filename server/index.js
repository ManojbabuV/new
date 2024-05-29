// const express = require("express");
// const oracledb = require("oracledb");
// const cors = require("cors");

// const app = express();
// app.use(express.json());
// app.use(cors());

// const corsOptions = {
//   origin: ['http://localhost:3001', 'http://localhost:3018'],
//   credentials: true,
// };
// app.use(cors(corsOptions));

// async function connectDB() {
//   let connection;
//   try {
//     connection = await oracledb.getConnection({
//       user: "custom",
//       password: "custom",
//       connectString: "dbfin:1521/FINMULTI",
//       port: 1521
//     });
//     console.log("Successfully connected to Oracle Database");
//     return connection;
//   } catch (err) {
//     console.error("Error connecting to Oracle Database:", err);
//     throw err;
//   }
// }

// app.post('/sign', async (req, res) => {
//   let connection;
//   try {
//     connection = await connectDB();
//     const { emp_name, mobile, department, emp_email, password, emp_address, emp_designation } = req.body;
//     const insert = "INSERT INTO custom.login (emp_name, mobile, department, emp_email, password, emp_address, emp_designation) VALUES (:emp_name, :mobile, :department, :emp_email, :password, :emp_address, :emp_designation)";
//     const binds = { emp_name, mobile, department, emp_email, password, emp_address, emp_designation };
//     await connection.execute(insert, binds, { autoCommit: true });
//     res.send("User registered successfully");
//   } catch (err) {
//     console.error("Error inserting user:", err);
//     res.status(500).send({ message: "An error occurred while registering the user." });
//   }
// });

// app.post("/server", async (req, res) => {
//   let connection;
//   try {
//     connection = await connectDB();
//     const { emp_email, password } = req.body;
//     const select = "SELECT * FROM custom.login WHERE emp_email = :emp_email AND password = :password";
//     const selectParams = { emp_email, password };
//     const result = await connection.execute(select, selectParams);
  
//       res.send(result.rows);
//   }
  
//     catch (err) {
//     console.error('Error executing query:', err);
//     res.status(500).send({ message: "An error occurred while logging in." });
//   }
// });

// app.post('/unland', async (req, res) => {
//   let connection;
//   try {
//     connection = await connectDB();
//     const { employee_id, start_date, end_date, lev_reason, lev_approve } = req.body;
//     const inserted = "INSERT INTO custom.leave (employee_id, start_date, end_date, lev_reason, lev_approve) VALUES (:employee_id, :start_date, :end_date, :lev_reason, :lev_approve)";
//     const bind = { employee_id, start_date, end_date, lev_reason, lev_approve };
//     await connection.execute(inserted, bind, { autoCommit: true });
//     res.send("User leave applied successfully");
//   } catch (err) {
//     console.error("Error inserting user:", err);
//     res.status(500).send({ message: "An error occurred while applying for leave."});
//   }
// });



// app.post('/count', async (_req, res) => {
//   let connection;
//   try {
//     connection = await connectDB();  
//     const query = "SELECT COUNT(*) FROM custom.employee"; 
//     const result = await connection.execute(query);
//     const count = result.rows[0].total;  
//     res.send(`Total records in the employee table: ${count}`); 
//   } catch (err) {
//     console.error("Error counting records:", err);
//     res.status(500).send({ message: "An error occurred while counting records." });
//   }
// });
// app.post('/count-employees', async (req, res) => {
//   let connection;
 
//     connection = await connectDB();
//     const query = "SELECT COUNT(*) FROM custom.employee WHERE gender='Male' ";
//     try { const result = await connection.execute(query);
//     const maleCount = result.rows[0].MALECOUNT;
//     res.send({ maleCount });
//   } catch (err) {
//     console.error("Error counting male employees:", err);
//     res.status(500).send({ message: "An error occurred while counting male employees." });
//   }
// });



// // app.get('/get-leave', async(req, res) => {
// //   let connection;
// //   try {
// //     connection = await connectDB();
// //     const query = "SELECT * FROM custom.leave";
// //     const result = await connection.execute(query);
// //     res.send(result.rows);  
// //   } catch (err) { 
// //     console.error("Error fetching leave records:", err);
// //     res.status(500).send({ message: "An error occurred while fetching leave records." });
// //   }
// // });
  
//   app.get('/getRecords', async (_req, res) => {
//     let connection;
  
//       connection = await connectDB();
//       const query = "SELECT id, employee_id, start_date, end_date, lev_reason, lev_approve, lev_status FROM custom.leave";
//       try {   connection.execute(query, [], (err, result) => {
//         if (err) {
//           console.error('Database query error:', err.message);
//           res.status(500).send('Internal Server Error');
//           return;
//         }
//         res.json(result.rows);
//       });
//     } catch (err) {
//       console.error("Database connection error:", err);
//       res.status(500).send('Internal Server Error');
//     }
//   });

// app.post("/comment", async(req, res) => {
//   let connection;
//   try{
//     connection = await connectDB()
//   const {  employee_name, father_name, employee_id, personal_email, work_email, mobile, gender, dob, marital_status, location, permanent, employee_Ref, remark, department, designation, reporting, pan_no, aadhar, bankac, uanno, pfno } = req.body; 
//   const sql = "INSERT INTO custom.employee ( employee_name, father_name, employee_id, personal_email, work_email, mobile, gender, dob, marital_status, location, permanent, employee_Ref, remark, department, designation, reporting, pan_no, aadhar, bankac, uanno, pfno) VALUES (:employee_name, :father_name, :employee_id, :personal_email, :work_email, :mobile, :gender, :dob, :marital_status, :location, :permanent, :employee_Ref, :remark, :department, :designation, :reporting, :pan_no, :aadhar, :bankac, :uanno, :pfno )";
//   const values = [employee_name, father_name, employee_id, personal_email, work_email, mobile, gender, dob, marital_status, location, permanent, employee_Ref, remark, department, designation, reporting, pan_no, aadhar, bankac, uanno, pfno];
  
//   await connection.execute(sql, values, { autoCommit: true });
//     res.send("User leave applied successfully");
//   } catch (err) {
//     console.error("Error inserting user:", err);
//     res.status(500).send({ message: "An error occurred while applying for leave."});
//   }
// });
// app.get('/getRecords', async (_req, res) => {
//   let connection;
//   try {
//     connection = await connectDB();
//     const sqlQuery = 'SELECT * FROM custom.leave';
//     const result = await connection.execute(sqlQuery);
//     const employees = result.rows.map((row) => {
//       // Construct each employee object.
//       return {
//         id: row[0],
//         employee_id: row[1],
//         start_date: row[2],
//         end_date: row[3], 
//         lev_reason: row[4],
//         lev_approve: row[5],
//         lev_status: row[6], 
//       };
//     });
//     console.log(employees); 
//     res.json({ employees: employees });
//   } catch (err) {
//     console.error("Error:", err.message);
//     res.status(500).send('Internal Server Error');
//   } finally {
//     if (connection) {
//       try {
//         await connection.close();
//       } catch (err) {
//         console.error("Error closing the database connection:", err.message);
//       }
//     }
//   }
// });



// // app.delete('/dropit', async(req,res)=>{
// // let connection;
// // try{
// //   connection = await connectDB();
// //   const query = "DELETE FROM custom.leave WHERE employee_id = :employee_id";
// //   const bind = { employee_id: req.body.employee_id };
// //   await connection.execute(query, bind, { autoCommit: true });
// //   res.send("Leave record deleted successfully");
// // }catch(err){
// //   console.error("Error deleting leave record:", err);
// // }
// // })
// const PORT =  3018;
// app.listen(PORT, async () => {
//   try {
//     await connectDB();
//     console.log("Running backend server on port", PORT);
//   } catch (err) {
//     console.error("Error starting backend server:", err);
//   }
// });







const express = require("express");
const oracledb = require("oracledb");
const cors = require("cors");
const multer = require("multer");
const app = express();
app.use(express.json());
app.use(cors());

const corsOptions = {
  origin: ['http://localhost:3000', 'http://localhost:3016'],
  credentials: true,
};
app.use(cors(corsOptions));

async function connectDB() {
  let connection;
  try {
    connection = await oracledb.getConnection({
      user: "custom",
      password: "custom",
      connectString: "dbfin:1521/FINMULTI",
      port: 1521
    });
    console.log("Successfully connected to Oracle Database");
    return connection;
  } catch (err) {
    console.error("Error connecting to Oracle Database:", err);
    throw err;
  }
}
app.post('/sign', async (req, res) => {
  let connection;
  try {
    connection = await connectDB();
    const { emp_name, mobile, department, emp_email, password, emp_address, emp_designation } = req.body;
    const insert = "INSERT INTO custom.login (emp_name, mobile, department, emp_email, password, emp_address, emp_designation) VALUES (:emp_name, :mobile, :department, :emp_email, :password, :emp_address, :emp_designation)";
    const binds = { emp_name, mobile, department, emp_email, password, emp_address, emp_designation };
    await connection.execute(insert, binds, { autoCommit: true });
    res.send("User registered successfully");
  } catch (err) {
    console.error("Error inserting user:", err);
    res.status(500).send({ message: "An error occurred while registering the user." });
  }
});

app.post("/server", async (req, res) => {
  let connection;
  try {
    connection = await connectDB();
    const { emp_email, password } = req.body;
    const select = "SELECT * FROM custom.login WHERE emp_email = :emp_email AND password = :password";
    const selectParams = { emp_email, password };
    const result = await connection.execute(select, selectParams);
  
      res.send(result.rows);
  }
  
    catch (err) {
    console.error('Error executing query:', err);
    res.status(500).send({ message: "An error occurred while logging in." });
  }
});

app.post('/unland', async (req, res) => {
  let connection;
  try {
    connection = await connectDB();
    const { leave_type, employee_id, start_date, end_date, lev_reason, lev_approve } = req.body;
    const inserted = "INSERT INTO custom.leave (leave_type, employee_id, start_date, end_date, lev_reason, lev_approve) VALUES (:leave_type, :employee_id, :start_date, :end_date, :lev_reason, :lev_approve)";
    const bind = {leave_type, employee_id, start_date, end_date, lev_reason, lev_approve };
    await connection.execute(inserted, bind, { autoCommit: true });
    res.send("User leave applied successfully");
  } catch (err) {
    console.error("Error inserting user:", err);
    res.status(500).send({ message: "An error occurred while applying for leave."});
  }
}); 
app.post('/attend', async (req, res) => {
  let connection;
  try {
    connection = await connectDB();
    const { employee_id, employee, checki, checko } = req.body;
    const inserted = "INSERT INTO custom.atten (employee_id, employee, checki, checko) VALUES (:employee_id, :employee, :checki, :checko)";
    const bind = { employee_id, employee, checki, checko };
    await connection.execute(inserted, bind, { autoCommit: true });
    res.send("User leave applied successfully");
  } catch (err) {
    console.error("Error inserting user:", err);
    res.status(500).send({ message: "An error occurred while applying for leave."});
  }
}); 
app.get('/getting', async (_req, res) => {
  let connection;
  try {
    connection = await connectDB();
    const sqlQuery = 'SELECT * FROM custom.atten';
    const result = await connection.execute(sqlQuery);
    const attendance = result.rows.map((row) => { 
      return {
        id: row[0], 
        employee_id: row[1],
        employee: row[2],
        checki: row[3],
        checko: row[4] 
      };
    });
    console.log(attendance); 
    res.json({ attendance: attendance });
  } catch (err) {
    console.error("Error:", err.message);
    res.status(500).send('Internal Server Error');
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error("Error closing the database connection:", err.message);
      }
    }
  }
});
// app.put('/update/:id', async(req,res)=>{
//   let connection;
//   try{
//     const id = req.params.id;
//     const lev_status = req.body
//     connection = await connectDB();
//       const update = 'UPDATE custom.leave SET lev_status = :newStatus WHERE leave_id = :leaveId'; 
//       const code = {lev_status, id }
//      const result =  await connection.execute(update, code, {autoCommit: true}) 
// res.send(result.rows,"data upated")
     
//   }catch(err){
//     console.error('Error executing query:', err);
//   }
// })



app.post('/update-lev-status', async (req, res) => {
  const { employee_id, lev_status } = req.body;
  let connection;

  try {
    connection = await connectDB();
    const result = await connection.execute(
      `UPDATE employees SET lev_status = :lev_status WHERE employee_id = :employee_id`,
      { lev_status, employee_id },
      { autoCommit: true }
    );

    if (result.rowsAffected === 1) {
      res.json({ success: true });
    } else {
      res.json({ success: false, message: 'Employee not found' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error(err);
      }
    }
  }
});
app.get('/getRecords', async (_req, res) => {
  let connection;
  try {
    connection = await connectDB();
    const sqlQuery = 'SELECT * FROM custom.leave';
    const result = await connection.execute(sqlQuery);
    const employees = result.rows.map((row) => {
       
      return {
        id: row[0], 
        leave_type: row[1],
        employee_id: row[2],
        start_date: row[3],
        end_date: row[4], 
        lev_reason: row[5],
        lev_approve: row[6],
        lev_status: row[7],
      };
    });
    console.log(employees); 
    res.json({ employees: employees });
  } catch (err) {
    console.error("Error:", err.message);
    res.status(500).send('Internal Server Error');
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error("Error closing the database connection:", err.message);
      }
    }
  }
});

//in my code backend response only array type send and also without key valye to senning that the reason not fetching to the ui
 
app.post("/comment", async(req, res) => {
  let connection;
  try{
    connection = await connectDB()
  const {  employee_name, father_name, employee_id, personal_email, work_email, mobile, gender, dob, marital_status, location, permanent, employee_Ref, remark, department, designation, reporting, pan_no, aadhar, bankac, uanno, pfno} = req.body; 
  const sql = "INSERT INTO custom.employee ( employee_name, father_name, employee_id, personal_email, work_email, mobile, gender, dob, marital_status, location, permanent, employee_Ref, remark, department, designation, reporting, pan_no, aadhar, bankac, uanno, pfno ) VALUES (:employee_name, :father_name, :employee_id, :personal_email, :work_email, :mobile, :gender, :dob, :marital_status, :location, :permanent, :employee_Ref, :remark, :department, :designation, :reporting, :pan_no, :aadhar, :bankac, :uanno, :pfno )";
  const values = [employee_name, father_name, employee_id, personal_email, work_email, mobile, gender, dob, marital_status, location, permanent, employee_Ref, remark, department, designation, reporting, pan_no, aadhar, bankac, uanno, pfno];
  await connection.execute(sql, values, { autoCommit: true });
    res.send("User leave applied successfully");
  } catch (err) {
    console.error("Error inserting user:", err);
    res.status(500).send({ message: "An error occurred while applying for leave."});
  }
});



// const storage = multer.memoryStorage(); // Store files in memory (you can adjust this)

// const upload = multer({ storage });
// app.post("/upload", upload.array("files", 5), async (req, res) => {
//   let connection;
//   try {
//     connection = await connectDB();
//     const upload = req.files;
//     const file = 'INSERT INTO custom.uploadfile (upload) VALUES (:upload)';
//     const result = { upload };
//     const response = await connection.execute(file, result, { autoCommit: true });
//     res.status(200).send("Files uploaded successfully!");
//     res.send(response);
//   } catch (error) {
//     console.log(error, "error");
//   }
// });

// app.post('/count-employees', async (_req, res) => {
//   let connection;
//   try {
//     connection = await connectDB();
//     const query = "SELECT COUNT(*) FROM custom.employee WHERE gender='Male'";
//     const result = await connection.execute(query);
//     const maleCount = result.rows[0].MALECOUNT;
//     res.send({ maleCount });
//     console.log(maleCount)
//   } catch (err) {
//     console.error("Error counting male employees:", err);
//     res.status(500).send({ message: "An error occurred while counting male employees." });
//   }
// });


app.get('/count', async (_req, res) => {
  let connection;
  try {
    connection = await connectDB();
    const query = "SELECT employee_name, father_name, employee_id, personal_email, work_email, mobile, gender, dob, marital_status, location, permanent, employee_Ref, remark, department, designation, reporting, pan_no, aadhar, bankac, uanno, pfno FROM custom.employee";  
    const result = await connection.execute(query);
    
    // Map the rows to a JSON structure
    const comments = result.rows.map((row) => {
      return {
        employeeName: row[0],
        fatherName: row[1],
        employeeId: row[2],
        personalEmail: row[3],
        workEmail: row[4],
        mobile: row[5],
        gender: row[6],
        dob: row[7],
        maritalStatus: row[8],
        location: row[9],
        permanent: row[10],
        employeeRef: row[11],
        remark: row[12],
        department: row[13],
        designation: row[14],
        reporting: row[15],
        panNo: row[16],
        aadhar: row[17],
        bankAc: row[18],
        uanNo: row[19],
        pfNo: row[20]
      };
    });
    
    res.json({ comments: comments, count: comments.length });
    console.log("total: ",comments.length); // This will log the count to the server console
  } catch (err) {
    console.error("Error fetching records:", err);
    res.status(500).send({ message: "An error occurred while fetching records." });
  } finally {
    if (connection) {
      try {
        await connection.close(); // Ensure the database connection is closed
      } catch (err) {
        console.error("Error closing the database connection:", err.message);
      }
    }
  }
});

app.post("/file", express.static(__dirname + "/public"));
app.get('/countemployees', async (_req, res) => {
  let connection;
  try {
    connection = await connectDB();
    const query = "SELECT COUNT(*) AS maleCount FROM custom.employee WHERE gender='Male'";
    const result = await connection.execute(query);
    const maleCount = result.rows[0][0]; // Access the count value

    res.json({  gender: [{ maleCount }] }); // Send the desired output format
    console.log("Male count:", maleCount);
  } catch (err) {
    console.error("Error counting male employees:", err);
    res.status(500).send({ message: "An error occurred while counting male employees." });
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error("Error closing the database connection:", err.message);
      }
    }
  }
});
app.get('/femaleCount', async (_req, res) => {
  let connection;
  try {
    connection = await connectDB();
    const query = "SELECT COUNT(*) AS femaleCount FROM custom.employee WHERE gender='Female'";
    const result = await connection.execute(query);
    const femaleCount = result.rows[0][0];  

    res.json({ fgender: [{ femaleCount }] });  
    console.log("Female count:", femaleCount);
  } catch (err) {
    console.error("Error counting male employees:", err);
    res.status(500).send({ message: "An error occurred while counting male employees." });
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error("Error closing the database connection:", err.message);
      }
    }
  }
});





   
const PORT =  3016; 
app.listen(PORT, async () => {
  try {
    await connectDB();
    console.log("Running backend server on port", PORT);
  } catch (err) {
    console.error("Error starting backend server:", err);
  }
});

 
