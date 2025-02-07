import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from '../../services/user.service';
import { HeaderComponent } from '../../layouts/header/header.component';
import { PageHeaderComponent } from '../../layouts/page-header/page-header.component';
import { FooterComponent } from '../../layouts/footer/footer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule, HeaderComponent, PageHeaderComponent, FooterComponent, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  signUpForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private userService: UserService) {
    this.signUpForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      address: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      birthDate: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.signUpForm.valid) {
      const userData = this.signUpForm.value;
      this.userService.register(userData).subscribe(() => {
        console.log('User registered successfully!');
        this.router.navigate(['/login']);
      }, (error) => {
        console.error('Error saving user:', error);
      });
    }
  }
}
