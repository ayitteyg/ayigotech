import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService, ContactMessage } from '../../services/api.service';
import { NotificationService } from '../../services/notification.service';

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

  successMessage = '';
  errorMessage = '';

  constructor(private fb: FormBuilder,
    private apiService:ApiService,
    private notification: NotificationService,
    
    
    ) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  onSubmit2(): void {
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



   onSubmit(): void {
    if (this.contactForm.valid) {
      this.isSubmitting = true;
      this.successMessage = '';
      this.errorMessage = '';

      const payload: ContactMessage = this.contactForm.value as ContactMessage;

      this.apiService.sendContactMessage(payload).subscribe({
        next: (response) => {
          this.notification.success('Message sent successfully!');
          this.successMessage = 'Message sent successfully!';
          this.contactForm.reset();
          this.isSubmitting = false;
        },
        error: (err) => {
          console.error(err);
           this.notification.error('Failed to send message. Please try again.');
          this.errorMessage = 'Failed to send message. Please try again.';
          this.isSubmitting = false;
        }
      });
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