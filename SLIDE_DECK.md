---
marp: true
theme: default
paginate: true
---

# MCCNO Handbook Assistant: Integrating MindStudio with a React Application

---

## 1. Introduction

- **MCCNO Handbook Assistant**: A chatbot for MCCNO handbook inquiries
- **Purpose**: Showcase MindStudio integration in a real-world React application

---

## 2. Project Setup

- **Framework**: Vite for React with TypeScript
- **Key Dependencies**:
  - React
  - Tailwind CSS
  - Lucide React

---

## 3. Application Structure

- **Main Components**:
  - App: Overall layout and theme management
  - ChatBot: Core functionality and MindStudio integration
- **Theme Management**: React Context for dark/light mode

---

## 4. MindStudio Integration

- **ChatBot Component**: Heart of the MindStudio integration
- **API Configuration**:
  - Endpoint: `https://api.mindstudio.ai/developer/v2/apps/run`
  - App ID: `228d9800-1ac7-4e74-8774-cccc0000baf4`
  - Workflow: `handbookChat.flow`

---

## 4. MindStudio Integration (cont.)

- **Request Process**:
  1. User input captured
  2. Request sent to MindStudio API
  3. Response received and displayed
  4. UI updated with new message

---

## 5. Key Aspects of MindStudio Integration

- **Context Management**: Maintaining conversation coherence
- **Error Handling**: Implementing retries and user-friendly error messages
- **Security**: Proper handling of API keys

---

## 6. User Interface

- **Responsive Design**: Tailwind CSS for adaptive layout
- **Theme Toggle**: Dark/Light mode for user preference
- **Accessibility**: Keyboard navigation and screen reader support

---

## 7. Development Process with Bolt

- **Bolt AI Assistant**: An AI-powered development tool
- **Bolt's Contributions**:
  - Code generation and problem-solving
  - Implementing best practices
  - Rapid prototyping and iteration

---

## 8. Live Demonstration

- **MCCNO Handbook Assistant in Action**: 
  - User interaction
  - MindStudio response handling
- **Code Walkthrough**: 
  - Key sections of ChatBot component
  - MindStudio API integration

---

## 9. Best Practices and Considerations

- **API Security**: Protecting keys in production
- **Testing**: Ensuring robust MindStudio integration
- **Performance**: Optimizing API calls and UI updates

---

## 10. Q&A Session

- Open floor for questions and discussions

---

## 11. Conclusion

- **Benefits of MindStudio Integration**:
  - Powerful AI capabilities in web applications
  - Enhanced user experiences
- **Call to Action**: Encourage building MindStudio-powered apps
- **Resources**: Documentation and support channels

---

# Thank You!

Contact: [Your Contact Information]