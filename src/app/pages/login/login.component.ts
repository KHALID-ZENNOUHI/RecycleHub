import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { HeaderComponent } from "../../layouts/header/header.component";
import { PageHeaderComponent } from "../../layouts/page-header/page-header.component";
import { FooterComponent } from "../../layouts/footer/footer.component";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, HeaderComponent, PageHeaderComponent, FooterComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  signInForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private userService: UserService) {
    this.signInForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit() {
    if (this.signInForm.valid) {
      const { email, password } = this.signInForm.value;
      this.userService.login(email, password).subscribe((user) => {
        if (user) {
          // Store user in localStorage
            const { password, ...userWithoutPassword } = user;
            localStorage.setItem('user', JSON.stringify(userWithoutPassword));
            this.router.navigate(['/']);
        } else {
          alert('Invalid credentials');
        }
      }, (error) => {
        console.error('Error logging in:', error);
      });
    }
  }
}
