import "./App.css";
import { useFormik } from "formik";
import * as yup from "yup";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

export default function App() {
  return (
    <div className="App">
      {/* <Loginform /> */}
      {/* <Register/> */}
      {/* <Addrestaurant /> */}
      <Typetimings />
    </div>
  );
}

const formValidationSchema = yup.object({
  email: yup.string().min(5, "Need a longer email").required("fill the email"),

  password: yup
    .string()
    .required("fill the password")
    .min(8, "Need a longer password")
    .max(12, "Too much password"),
});

function Loginform() {
  // const history = useHistory();
  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: formValidationSchema,
    onSubmit: (values) => {
      console.log("onsubmit", values);
    },
  });

  return (
    <div>
      <div className="add-restaurant">
        <Stack spacing={2} direction="row">
          <Button variant="contained">Add restaurant</Button>
          <Button variant="outlined">Register</Button>
        </Stack>
      </div>

      <form onSubmit={formik.handleSubmit}>
        <TextField
          value={formik.values.email}
          id="outlined-basic-email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          variant="outlined"
          size="small"
          label="email"
        />
        <br />
        {formik.touched.email && formik.errors.email ? formik.errors.email : ""}

        <TextField
          value={formik.values.password}
          type="password"
          id="outlined-basic-password"
          name="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          minLength="8"
          variant="outlined"
          size="small"
          label="password"
        />
        <br />
        {formik.touched.password && formik.errors.password
          ? formik.errors.password
          : ""}

        <Button
          variant="contained"
          // onClick={() => history.goForward(`/rental`)}
          aria-label="toggle descreption"
        >
          Login
        </Button>
      </form>
    </div>
  );
}
// New user
function Register() {
  return (
    <div className="register-container">
      <h3>Sign up</h3>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "30ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="outlined-basic" label="Full Name" variant="outlined" />
        <TextField id="outlined-basic" label="Email" variant="outlined" />
        <TextField
          id="outlined-basic"
          label="Mobile Number"
          variant="outlined"
        />
        <TextField id="outlined-basic" label="Password" variant="outlined" />
        <TextField
          id="outlined-basic"
          label="Confirm Password"
          variant="outlined"
        />
        <Button
          size="small"
          variant="contained"
          // onClick={() => history.goForward(`/rental`)}
          aria-label="toggle descreption"
        >
          sign up
        </Button>
      </Box>
    </div>
  );
}

// add restaurant

function Addrestaurant() {
  return (
    <div className="addrestaurant">
      <h2>Restaurant details</h2>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "30ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          label="Restaurant Name"
          variant="outlined"
        />
        <TextField
          id="outlined-basic"
          label="Restaurant Address "
          variant="outlined"
        />
        <TextField
          id="outlined-basic"
          label="Contact number at restaurant"
          variant="outlined"
        />
        <TextField
          id="outlined-basic"
          label="Restaurant owner Name"
          variant="outlined"
        />
        <Stack spacing={15} direction="row">
          <Button variant="outlined">Back</Button>
          <Button variant="contained">Next</Button>
        </Stack>
      </Box>
    </div>
  );
}

//restaurant type & timing

function Typetimings() {
  return (
    <div className="typetiming">
      <h2>Restaurant Type & Timings</h2>
      <h5>Establishment type</h5>
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">
          Select most relevant category for your restaurant type
        </FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
        >
          <FormControlLabel
            value="female"
            control={<Radio />}
            label="Both, delivery and dine-in available"
          />
          <FormControlLabel
            value="male"
            control={<Radio />}
            label="Dine-in only"
          />
          <FormControlLabel
            value="other"
            control={<Radio />}
            label="Delivery only"
          />
        </RadioGroup>
      </FormControl>
    </div>
  );
}
