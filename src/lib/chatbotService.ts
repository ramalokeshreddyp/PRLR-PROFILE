import { portfolioKnowledgeBase } from './chatbotKnowledge';

/**
 * AI Chatbot Service
 * Intelligent conversational AI trained on portfolio data
 */

interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

interface ChatResponse {
  answer: string;
  confidence: number;
  sources?: string[];
}

class PortfolioChatbot {
  private knowledgeBase = portfolioKnowledgeBase;
  private conversationHistory: Message[] = [];
  private skillLookup = this.buildSkillLookup();

  /**
   * Process user question and generate intelligent response
   */
  async askQuestion(question: string): Promise<ChatResponse> {
    const normalizedQuestion = question.toLowerCase().trim();
    
    // Add to conversation history
    this.conversationHistory.push({
      role: 'user',
      content: question,
      timestamp: new Date(),
    });

    // Analyze question and generate response
    const response = this.generateResponse(normalizedQuestion);

    // Add response to history
    this.conversationHistory.push({
      role: 'assistant',
      content: response.answer,
      timestamp: new Date(),
    });

    return response;
  }

  /**
   * Generate intelligent response based on question analysis
   */
  private generateResponse(question: string): ChatResponse {
    // Skill-specific checks (e.g., "is C++ a skill?", "do you know React?")
    const skillMatch = this.findSkillMatch(question);
    if (skillMatch) {
      const relatedProjects = this.findRelatedProjects(skillMatch.skill);
      const projectLine = relatedProjects.length
        ? `\n\n**Related projects:**\n${relatedProjects.map(p => `• ${p.name}`).join('\n')}`
        : '';
      return {
        answer: `Yes — ${skillMatch.skill} is one of Lokesh's skills. It falls under **${skillMatch.category}**.${projectLine}`,
        confidence: 1.0,
        sources: ['Skills Section', ...(relatedProjects.length ? ['Projects Section'] : [])],
      };
    }

    // Greeting patterns
    if (this.matchesPattern(question, ['hi', 'hello', 'hey', 'greetings', 'good morning', 'good evening'])) {
      return {
        answer: `Hello! 👋 I'm Lokesh's AI assistant. I can help you learn about his skills, projects, achievements, and experience. What would you like to know?`,
        confidence: 1.0,
      };
    }

    // Personal info
    if (this.matchesPattern(question, ['who are you', 'who is', 'tell me about', 'introduce'])) {
      return {
        answer: `I'm ${this.knowledgeBase.personal.name}, also known as ${this.knowledgeBase.personal.shortName}. I'm a ${this.knowledgeBase.personal.title}. ${this.knowledgeBase.personal.about}`,
        confidence: 1.0,
        sources: ['About Section'],
      };
    }

    // Skills
    if (this.matchesPattern(question, ['skills', 'technologies', 'tech stack', 'programming languages', 'what can you do'])) {
      const skills = this.knowledgeBase.skills;
      return {
        answer: `I'm proficient in multiple domains:\n\n🔹 **Programming**: ${skills.programming.join(', ')}\n🔹 **Web Development**: ${skills.webDevelopment.join(', ')}\n🔹 **Databases**: ${skills.databases.join(', ')}\n🔹 **Data Analytics**: ${skills.dataAnalytics.join(', ')}\n🔹 **Tools**: ${skills.tools.join(', ')}\n\nI'm particularly strong in C++, DSA, and full-stack development!`,
        confidence: 1.0,
        sources: ['Skills Section'],
      };
    }

    // Generic "do you know" / "are you good at" with tech keywords
    if (this.matchesPattern(question, ['do you know', 'do you use', 'are you good at', 'have you used', 'familiar with', 'experience with'])) {
      const fallbackSkill = this.findSkillMatch(question);
      if (fallbackSkill) {
        const relatedProjects = this.findRelatedProjects(fallbackSkill.skill);
        const projectLine = relatedProjects.length
          ? `\n\n**Related projects:**\n${relatedProjects.map(p => `• ${p.name}`).join('\n')}`
          : '';
        return {
          answer: `Yes — ${fallbackSkill.skill} is part of Lokesh's skill set under **${fallbackSkill.category}**.${projectLine}`,
          confidence: 0.95,
          sources: ['Skills Section', ...(relatedProjects.length ? ['Projects Section'] : [])],
        };
      }
    }

    // Projects
    if (this.matchesPattern(question, ['projects', 'what have you built', 'portfolio', 'work', 'code to win', 'fatepick', 'ledger'])) {
      if (question.includes('code to win')) {
        const project = this.knowledgeBase.projects[0];
        return {
          answer: `**${project.name}** is my flagship project! 🚀\n\n${project.description}\n\n**Tech Stack**: ${project.technologies.join(', ')}\n\n**Key Features**:\n${project.features.map(f => `• ${f}`).join('\n')}\n\nCheck it out: ${project.live}`,
          confidence: 1.0,
          sources: ['Projects Section'],
        };
      }

      const projectsList = this.knowledgeBase.projects
        .map(p => `• **${p.name}**: ${p.type}`)
        .join('\n');
      return {
        answer: `I've built several impressive projects:\n\n${projectsList}\n\nWould you like to know more about any specific project?`,
        confidence: 1.0,
        sources: ['Projects Section'],
      };
    }

    // Achievements
    if (this.matchesPattern(question, ['achievements', 'leetcode', 'rating', 'competitive programming', 'cp', 'contest'])) {
      const leetcode = this.knowledgeBase.achievements.leetcode;
      return {
        answer: `I'm actively competitive programming! 🏆\n\n**LeetCode**: ${leetcode.rating} (${leetcode.badge}) - ${leetcode.rank}\n**CodeStudio**: 1886 (Specialist)\n**GeeksforGeeks**: 1685 (3★) - 500+ problems\n**CodeChef**: 1617 (3★)\n**HackerRank**: 5★ in Problem Solving\n\nI love solving algorithmic challenges and have strong DSA fundamentals!`,
        confidence: 1.0,
        sources: ['Achievements Section'],
      };
    }

    // Experience/Internships
    if (this.matchesPattern(question, ['experience', 'internship', 'work experience', 'job', 'worked at'])) {
      const internships = this.knowledgeBase.internships
        .map(i => `• **${i.role}** at ${i.company} (${i.duration})`)
        .join('\n');
      return {
        answer: `I have hands-on experience through multiple internships:\n\n${internships}\n\nI've worked with MERN stack, data analytics, and gained leadership experience as Class Representative!`,
        confidence: 1.0,
        sources: ['Internships Section'],
      };
    }

    // Certifications
    if (this.matchesPattern(question, ['certifications', 'certificates', 'certified', 'courses', 'learning'])) {
      const certs = this.knowledgeBase.certifications.slice(0, 5);
      const certList = certs.map(c => `• ${c.title} - ${c.issuer}`).join('\n');
      return {
        answer: `I'm committed to continuous learning! Here are some of my certifications:\n\n${certList}\n\n...and ${this.knowledgeBase.certifications.length - 5} more! I stay updated with latest technologies in AI, ML, and software development.`,
        confidence: 1.0,
        sources: ['Certifications Section'],
      };
    }

    // Contact
    if (this.matchesPattern(question, ['contact', 'email', 'reach', 'phone', 'hire', 'connect'])) {
      return {
        answer: `I'd love to connect! 📧\n\n**Email**: ${this.knowledgeBase.personal.email}\n**Phone**: ${this.knowledgeBase.personal.phone}\n**LinkedIn**: ${this.knowledgeBase.socialLinks.linkedin}\n**GitHub**: ${this.knowledgeBase.socialLinks.github}\n\nFeel free to reach out for opportunities, collaborations, or just to chat about tech!`,
        confidence: 1.0,
        sources: ['Contact Section'],
      };
    }

    // Resume
    if (this.matchesPattern(question, ['resume', 'cv', 'download', 'view resume'])) {
      return {
        answer: `You can view my detailed resume here: ${this.knowledgeBase.resume.driveLink}\n\nIt includes all my education, skills, projects, achievements, and experience!`,
        confidence: 1.0,
        sources: ['Resume Section'],
      };
    }

    // Education
    if (this.matchesPattern(question, ['education', 'university', 'college', 'degree', 'student'])) {
      return {
        answer: `I'm currently a ${this.knowledgeBase.personal.education}. I'm passionate about computer science and actively applying my knowledge through projects and competitive programming!`,
        confidence: 1.0,
      };
    }

    // Help/Capabilities
    if (this.matchesPattern(question, ['help', 'what can you tell', 'capabilities', 'assist'])) {
      return {
        answer: `I can help you learn about:\n\n• 👨‍💻 Skills & Technologies\n• 🚀 Projects & GitHub repos\n• 🏆 Competitive Programming achievements\n• 💼 Internships & Experience\n• 📜 Certifications\n• 📧 Contact information\n• 📄 Resume\n\nJust ask me anything about Lokesh's portfolio!`,
        confidence: 1.0,
      };
    }

    // Default response with suggestions
    return {
      answer: `I'm not sure about that specific question, but I can tell you about:\n\n• Skills and technologies\n• Projects and work\n• Competitive programming achievements\n• Internships and experience\n• Certifications\n• How to contact Lokesh\n\nWhat would you like to know?`,
      confidence: 0.5,
    };
  }

  /**
   * Build a lookup map of skills to category
   */
  private buildSkillLookup(): Record<string, string> {
    const skills = this.knowledgeBase.skills;
    const categories: Record<string, string[]> = {
      Programming: skills.programming,
      'Data Structures & Algorithms': skills.dataStructures,
      'Web Development': skills.webDevelopment,
      Databases: skills.databases,
      'Data Analytics': skills.dataAnalytics,
      Tools: skills.tools,
    };

    const map: Record<string, string> = {};
    Object.entries(categories).forEach(([category, list]) => {
      list.forEach((skill) => {
        map[skill.toLowerCase()] = category;
        map[this.normalizeSkill(skill)] = category;
      });
    });

    // Common aliases
    map['cpp'] = 'Programming';
    map['c++'] = 'Programming';
    map['js'] = 'Web Development';
    map['react'] = 'Web Development';
    map['node'] = 'Web Development';
    map['mongodb'] = 'Databases';
    map['mysql'] = 'Databases';
    map['powerbi'] = 'Data Analytics';
    map['vs code'] = 'Tools';
    map['vscode'] = 'Tools';
    return map;
  }

  /**
   * Find a specific skill mentioned in the question
   */
  private findSkillMatch(question: string): { skill: string; category: string } | null {
    const normalized = question.toLowerCase();
    const tokens = this.extractTokens(normalized);

    for (const token of tokens) {
      const category = this.skillLookup[token];
      if (category) {
        const skill = this.recoverSkillName(token) ?? token.toUpperCase();
        return { skill, category };
      }
    }

    // Fallback: direct substring match for multi-word skills
    for (const [skillKey, category] of Object.entries(this.skillLookup)) {
      if (normalized.includes(skillKey)) {
        const skill = this.recoverSkillName(skillKey) ?? skillKey.toUpperCase();
        return { skill, category };
      }
    }

    return null;
  }

  private extractTokens(text: string): string[] {
    return text
      .replace(/[^a-z0-9+.#\s]/gi, ' ')
      .split(/\s+/)
      .filter(Boolean);
  }

  private normalizeSkill(skill: string): string {
    return skill.toLowerCase().replace(/\s+/g, ' ').trim();
  }

  private recoverSkillName(skillKey: string): string | null {
    const allSkills = [
      ...this.knowledgeBase.skills.programming,
      ...this.knowledgeBase.skills.dataStructures,
      ...this.knowledgeBase.skills.webDevelopment,
      ...this.knowledgeBase.skills.databases,
      ...this.knowledgeBase.skills.dataAnalytics,
      ...this.knowledgeBase.skills.tools,
    ];

    const normalizedKey = this.normalizeSkill(skillKey);
    const found = allSkills.find((skill) => this.normalizeSkill(skill) === normalizedKey);
    if (found) return found;

    if (skillKey === 'cpp') return 'C++';
    if (skillKey === 'js') return 'JavaScript';
    if (skillKey === 'vscode' || skillKey === 'vs code') return 'VS Code';
    if (skillKey === 'powerbi') return 'Power BI';
    if (skillKey === 'node') return 'Node.js';
    if (skillKey === 'react') return 'React.js';
    return null;
  }

  private findRelatedProjects(skill: string): Array<{ name: string }> {
    const normalizedSkill = this.normalizeSkill(skill);
    return this.knowledgeBase.projects.filter((project) => {
      return project.technologies.some((tech) => this.normalizeSkill(tech).includes(normalizedSkill));
    }).map((project) => ({ name: project.name }));
  }

  /**
   * Check if question matches any pattern
   */
  private matchesPattern(question: string, patterns: string[]): boolean {
    return patterns.some(pattern => question.includes(pattern));
  }

  /**
   * Get conversation history
   */
  getHistory(): Message[] {
    return this.conversationHistory;
  }

  /**
   * Clear conversation history
   */
  clearHistory(): void {
    this.conversationHistory = [];
  }

  /**
   * Get suggested questions
   */
  getSuggestedQuestions(): string[] {
    return [
      "What are your skills?",
      "Tell me about your projects",
      "What's your LeetCode rating?",
      "What internships have you done?",
      "How can I contact you?",
      "Show me your certifications",
      "What technologies do you use?",
    ];
  }
}

// Export singleton instance
export const chatbot = new PortfolioChatbot();
export default chatbot;
