import "./App.css";
import { useFormik } from "formik";
import * as yup from "yup";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function App() {
  return (
    <div className="App">
      <Loginform />
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
// add Restaurant
