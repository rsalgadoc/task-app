package io.github.rsalgadoc.tasks.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.*;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import io.github.rsalgadoc.tasks.backend.entities.User;
import io.github.rsalgadoc.tasks.backend.repository.UserRepository;
import io.github.rsalgadoc.tasks.backend.security.JwtUtil;

@RestController
@RequestMapping("/auth")
public class AuthController {
	@Autowired
	AuthenticationManager authenticationManager;
	@Autowired
	UserRepository userRepository;
	@Autowired
	PasswordEncoder encoder;
	@Autowired
	JwtUtil jwtUtils;

	@PostMapping("/signin")
	public String authenticateUser(@RequestBody User user) {
		Authentication authentication = authenticationManager
				.authenticate(new UsernamePasswordAuthenticationToken(user.getUsername(), user.getPassword()));
		UserDetails userDetails = (UserDetails) authentication.getPrincipal();
		return jwtUtils.generateToken(userDetails.getUsername());
	}

	@PostMapping("/signup")
	public ResponseEntity<Object> registerUser(@RequestBody User user) {
		if (userRepository.findByEmail(user.getEmail()) != null) {
			return ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE).body("User already exists");
		}
		// Create new user's account

		var newUser = new User().setFullName(user.getFullName()).setEmail(user.getEmail())
				.setPassword(encoder.encode(user.getPassword()));

		return ResponseEntity.ok(userRepository.save(newUser));
	}
}
