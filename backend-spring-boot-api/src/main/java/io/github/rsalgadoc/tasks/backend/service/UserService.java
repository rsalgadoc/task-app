package io.github.rsalgadoc.tasks.backend.service;

import org.springframework.stereotype.Service;

import io.github.rsalgadoc.tasks.backend.entities.User;
import io.github.rsalgadoc.tasks.backend.repository.UserRepository;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserService {
	private final UserRepository userRepository;

	public UserService(UserRepository userRepository) {
		this.userRepository = userRepository;
	}

	public List<User> allUsers() {
		List<User> users = new ArrayList<>();

		userRepository.findAll().forEach(users::add);

		return users;
	}
}
