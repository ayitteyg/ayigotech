import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})


export class ContactComponent{
  contactForm: FormGroup;
  isSubmitting = false;
  submitMessage = '';

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      this.isSubmitting = true;
      
      // Simulate API call - replace with actual Django API endpoint
      setTimeout(() => {
        console.log('Form submitted:', this.contactForm.value);
        
        // Here you would typically make an HTTP request to your Django backend
        // this.http.post('https://your-django-api.com/contact/', this.contactForm.value)
        //   .subscribe({
        //     next: (response) => this.handleSuccess(response),
        //     error: (error) => this.handleError(error)
        //   });
        
        // For demo purposes, we'll simulate a successful submission
        this.handleSuccess({ message: 'Message sent successfully!' });
      }, 1500);
    }
  }

  handleSuccess(response: any): void {
    this.isSubmitting = false;
    this.submitMessage = response.message || 'Message sent successfully!';
    this.contactForm.reset();
    
    // Clear success message after 5 seconds
    setTimeout(() => {
      this.submitMessage = '';
    }, 5000);
  }

  handleError(error: any): void {
    this.isSubmitting = false;
    this.submitMessage = 'Sorry, there was an error sending your message. Please try again.';
    console.error('Form submission error:', error);
    
    // Clear error message after 5 seconds
    setTimeout(() => {
      this.submitMessage = '';
    }, 5000);
  }
}