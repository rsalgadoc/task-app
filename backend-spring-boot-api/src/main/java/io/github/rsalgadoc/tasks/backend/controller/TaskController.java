
package io.github.rsalgadoc.tasks.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import io.github.rsalgadoc.tasks.backend.entities.Task;
import io.github.rsalgadoc.tasks.backend.repository.TaskRepository;
import io.swagger.v3.oas.annotations.Operation;

@RestController
public class TaskController {

	@Autowired
	private TaskRepository repository;

	public TaskController(TaskRepository repository) {
		this.repository = repository;
	}

	@GetMapping("/tasks")
    @Operation(summary = "Get all the tasks", description = "Endpoint that brings all data from the Task table")
	public List<Task> findAllTasks() {
		return repository.findAll();
	}

	@GetMapping("/tasks/{id}")
    @Operation(summary = "Get task by Id", description = "Endpoint that brings one task data")
	public Task getTask(@PathVariable Long id) {
		Task task = repository.findById(id)
				.orElseThrow(() -> new RuntimeException("Task id not found - " + id));
		return task;
	}

	@PostMapping("/tasks")
    @Operation(summary = "Create a new task", description = "Endpoint to create a new task")
	public Task addTask(@RequestBody Task task) {
		Task newTask = repository.save(task);
		return newTask;
	}

	@PutMapping("/tasks/{id}")
    @Operation(summary = "Update a task", description = "Endpoint to update a task")
	public Task updateTask(@RequestBody Task task) {
		Task theTask = repository.save(task);
		return theTask;
	}

	@DeleteMapping("/tasks/{id}")
    @Operation(summary = "Delete a task by Id", description = "Endpoint to delete a task")
	public String deleteTask(@PathVariable Long id) {
		Task task = repository.findById(id)
				.orElseThrow(() -> new RuntimeException("Task id not found - " + id));
		repository.delete(task);
		return "Deleted task with id: " + id;
	}

}
