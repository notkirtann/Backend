# Data Modeling with Mongoose – Summary Notes

---

## 1. Importance of Data Modeling

In backend development, the **first question** should be:

> **“What data will be stored?”**

Not:

* Where will it be stored?
* How will it be stored?

### Identify Data Fields

Example (User):

* username
* email
* password
* date of birth
* profile photo

Good data modeling:

* Improves performance
* Prevents redesign later
* Makes relationships clear
* Scales better for production

---

## 2. Tools for Data Modeling

### Professional Tools

* Moon Modeler
* Used in large organizations
* Helps define:

  * Schemas
  * Relationships
  * ER diagrams

### Beginner Approach

You don’t need tools initially.

Start with:

* Pen & paper
* List entities
* Define fields
* Define relationships

Example:

```
User → creates → Todo → contains → SubTodo
```

---

## 3. Introduction to Mongoose

**Mongoose** is an Object Data Modeling (ODM) library for MongoDB.

### Why Mongoose?

* Schema-based structure
* Validation
* Default values
* Relationships
* Middleware & hooks

Important:

> First define schemas → Database connection comes later.

---

## 4. Practical Data Models

### 4.1 User Schema

Fields:

* username
* email
* password

Example:

```js
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  }
}, {
  timestamps: true
});

export default mongoose.model("User", userSchema);
```

### timestamps: true

Automatically adds:

* `createdAt`
* `updatedAt`

---

## 5. Todo Schema

Represents a main task.

Fields:

* content
* completed status
* reference to User

Example:

```js
const todoSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  }
}, {
  timestamps: true
});

export default mongoose.model("Todo", todoSchema);
```

### Relationship

One User → Many Todos

---

## 6. SubTodo Schema

Represents sub-tasks under a Todo.

Fields:

* content
* completed status
* reference to Todo

Example:

```js
const subTodoSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  todo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Todo",
    required: true
  }
}, {
  timestamps: true
});

export default mongoose.model("SubTodo", subTodoSchema);
```

---

## 7. Alternative Relationship (Array of ObjectIds)

Instead of storing `todo` in SubTodo, you can store SubTodos inside Todo:

```js
subTodos: [{
  type: mongoose.Schema.Types.ObjectId,
  ref: "SubTodo"
}]
```

Relationship:

```
User
  ↓
Todo
  ↓
[SubTodo, SubTodo, SubTodo]
```

---

## 8. Relationship Summary

| Entity           | Relationship   |
| ---------------- | -------------- |
| User → Todo      | One to Many    |
| Todo → SubTodo   | One to Many    |
| MongoDB relation | ObjectId + ref |

---

## 9. Best Practices

* Always define schema before coding logic
* Use `required` for important fields
* Use `unique` for username/email
* Use `timestamps: true`
* Use references instead of embedding for scalable data
* Think in **entities and relationships**

---

## 10. Backend Data Modeling Workflow

```
Step 1: Identify Entities (User, Todo, SubTodo)
Step 2: List Fields
Step 3: Define Relationships
Step 4: Create Mongoose Schemas
Step 5: Create Models
Step 6: Use in Controllers
```

---

## Key Concept (Interview)

> Mongoose is an ODM that provides schema-based modeling, validation, and relationship handling for MongoDB.

---
