import React from "react";
import { 
  Box, 
  Grid, 
  Typography, 
  TextField, 
  Button, 
  Paper, 
  Breadcrumbs, 
  Link 
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function RequestQuotation() {
  const navigate = useNavigate();

  const { 
    handleSubmit, 
    control, 
    formState: { errors }, 
    reset 
  } = useForm();

  const onSubmit = (data) => {
    console.log("Quotation Request:", data);
    alert("Request submitted successfully!");
    reset();
  };

  return (
    <Box sx={{ p: 4, backgroundColor: "#fafafa", minHeight: "80vh" }}>
      
      {/* Breadcrumb */}
      <Box sx={{ mb: 2 }}>
        <Breadcrumbs aria-label="breadcrumb" sx={{ fontSize: "0.85rem" }}>
          <Link
            underline="hover"
            color="inherit"
            sx={{ cursor: "pointer" }}
            onClick={() => navigate("/")}
          >
            Home
          </Link>
          <Typography color="grey.800" sx={{ fontSize: "0.85rem" }}>Request Quotation</Typography>
        </Breadcrumbs>
      </Box>

      {/* Title */}
      {/* <Typography variant="h4" fontWeight={700} gutterBottom>
        Request Quotation
      </Typography> */}

      <Grid container spacing={10} justifyContent="center" mt={1}>
        {/* Left Side - Info */}
        <Grid item xs={12} md={5}>
          <Box sx={{ lineHeight: 1.8 }}>
            <Typography variant="body1" sx={{ mb: 2 }}>
              - Feel free to explain your needs.
              <br />
              - Fill the form with your requirement details to get a quotation.
              <br />
              - If you are not clear with your exact needs, don’t worry — our experts will help you via phone or email.
            </Typography>

            <Typography variant="body1" sx={{ fontWeight: 600, color: "green", mt: 2 }}>
              For Sales Related Enquiry:
            </Typography>
            <Typography variant="body1" sx={{ mt: 1 }}>
              Email:{" "}
              <Link href="mailto:info@sunbeampress.com" color="inherit">
                info@sunbeampress.com
              </Link>
              <br />
              Ph:{" "}
              <Typography component="span" sx={{ fontWeight: 600, color: "primary.main" }}>
                +91-98540-36874 / +91-98540-73076
              </Typography>
            </Typography>
          </Box>
        </Grid>

        {/* Right Side - Form */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 4, boxShadow: 3, borderRadius: 2 }}>
            <Typography variant="h6" gutterBottom fontWeight={600} sx={{
              color: "grey.800",
            }}>
              Fill the form to get a quotation
            </Typography>

            <Box 
              component="form" 
              noValidate 
              autoComplete="off" 
              onSubmit={handleSubmit(onSubmit)}
            >
              {/* Name */}
              <Controller
                name="name"
                control={control}
                defaultValue=""
                rules={{ required: "Name is required" }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Name*"
                    fullWidth
                    margin="normal"
                    error={!!errors.name}
                    helperText={errors.name?.message}
                  />
                )}
              />

              {/* Email */}
              <Controller
                name="email"
                control={control}
                defaultValue=""
                rules={{
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Enter a valid email address"
                  }
                }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Email ID*"
                    fullWidth
                    margin="normal"
                    error={!!errors.email}
                    helperText={errors.email?.message}
                  />
                )}
              />

              {/* Mobile */}
              <Controller
                name="mobile"
                control={control}
                defaultValue=""
                rules={{
                  required: "Mobile number is required",
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: "Enter a valid 10-digit mobile number"
                  }
                }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Mobile No.*"
                    fullWidth
                    margin="normal"
                    error={!!errors.mobile}
                    helperText={errors.mobile?.message}
                  />
                )}
              />

              {/* Address */}
              <Controller
                name="address"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Address"
                    fullWidth
                    margin="normal"
                    multiline
                    rows={2}
                  />
                )}
              />

              {/* Requirement Details */}
              <Controller
                name="requirements"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Requirement Details"
                    fullWidth
                    margin="normal"
                    multiline
                    rows={3}
                  />
                )}
              />

              {/* Delivery Date */}
              <Controller
                name="deliveryDate"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Delivery Date (On/Before)"
                    type="date"
                    InputLabelProps={{ shrink: true }}
                    fullWidth
                    margin="normal"
                  />
                )}
              />

              {/* Submit */}
              <Button
                fullWidth
                type="submit"
                variant="contained"
                size="large"
                sx={{
                  textTransform: "none",
                  fontWeight: 600,
                  py: 1.2,
                  mt: 3,
                  backgroundColor: "primary.main",
                  "&:hover": {
                    backgroundColor: "primary.main" // keep same color
                  }
                }}
              >
                Send Request
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
