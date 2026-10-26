"use client";

import {
  Button,
  Description,
  FieldError,
  FieldGroup,
  Fieldset,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { redirect } from "next/navigation";



export default function Page() {
  const onSubmit =async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data =Object.fromEntries(formData.entries());
    console.log('form data:',data)
     const response=await fetch('http://localhost:5000/users',{
        method:'POST',
        headers:{
            'Content-type':'application/json'
        },
        body:JSON.stringify(data),
     })
     const result=await response.json();
     console.log('after submission:',result);
     if(result.success){
     redirect('/users');
     }
    };


  return (
    <div className="flex min-h-screen items-center justify-center">
      <Form
        className="m-4 w-full max-w-96"
        onSubmit={onSubmit}
      >
        <Fieldset>
          <Fieldset.Legend>Profile Settings</Fieldset.Legend>

          <Description>
            Update your profile information.
          </Description>

          <FieldGroup>
            <TextField
              isRequired
              name="name"
              validate={(value) => {
                if (value.length < 3) {
                  return "Name must be at least 3 characters";
                }
                return null;
              }}
            >
              <Label>Name</Label>
              <Input placeholder="John Doe" />
              <FieldError />
            </TextField>

            <TextField
              isRequired
              name="email"
              type="email"
            >
              <Label>Email</Label>
              <Input placeholder="john@example.com" />
              <FieldError />
            </TextField>
          </FieldGroup>

          <Fieldset.Actions>
            <Button type="submit">Save changes</Button>
            <Button type="reset" variant="secondary">
              Cancel
            </Button>
          </Fieldset.Actions>
        </Fieldset>
      </Form>
    </div>
  );
}


