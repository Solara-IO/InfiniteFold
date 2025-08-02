import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
/* MirrorFold Recursive Search Engine Styles */

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');

body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  margin: 0;
  padding: 0;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
  color: #e2e8f0;
  min-height: 100vh;
}

/* Hide default scrollbar but keep functionality */
::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  background: rgba(15, 23, 42, 0.5);
}

::-webkit-scrollbar-thumb {
  background: rgba(59, 130, 246, 0.5);
  border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
  background: rgba(59, 130, 246, 0.7);
}

/* Smooth animations */
* {
  transition: all 0.2s ease;
}

/* Google CSE Integration Styles */
.gcse-searchresults-only {
  background: transparent !important;
  border: none !important;
}

.gsc-control-cse {
  background: transparent !important;
  border: none !important;
  padding: 0 !important;
}

.gsc-webResult {
  background: rgba(51, 65, 85, 0.3) !important;
  border: 1px solid rgba(71, 85, 105, 0.5) !important;
  border-radius: 12px !important;
  margin-bottom: 16px !important;
  padding: 16px !important;
}

.gsc-webResult .gsc-result {
  background: transparent !important;
}

.gsc-webResult .gs-title {
  color: #60a5fa !important;
  font-size: 18px !important;
  font-weight: 600 !important;
  text-decoration: none !important;
}

.gsc-webResult .gs-title:hover {
  color: #93c5fd !important;
  text-decoration: underline !important;
}

.gsc-webResult .gs-snippet {
  color: #cbd5e1 !important;
  font-size: 14px !important;
  line-height: 1.6 !important;
  margin-top: 8px !important;
}

.gsc-webResult .gs-visibleUrl {
  color: #4ade80 !important;
  font-size: 12px !important;
  font-family: 'JetBrains Mono', monospace !important;
}

/* Pagination styles */
.gsc-cursor-box {
  text-align: center !important;
  margin-top: 24px !important;
}

.gsc-cursor {
  color: #60a5fa !important;
}

.gsc-cursor-page {
  background: rgba(59, 130, 246, 0.1) !important;
  border: 1px solid rgba(59, 130, 246, 0.3) !important;
  border-radius: 8px !important;
  color: #60a5fa !important;
  margin: 0 4px !important;
  padding: 8px 12px !important;
  text-decoration: none !important;
}

.gsc-cursor-page:hover {
  background: rgba(59, 130, 246, 0.2) !important;
  border-color: rgba(59, 130, 246, 0.5) !important;
}

.gsc-cursor-current-page {
  background: rgba(59, 130, 246, 0.3) !important;
  border: 1px solid rgba(59, 130, 246, 0.5) !important;
  color: #93c5fd !important;
  font-weight: 600 !important;
}

/* Loading states */
.gsc-loading-text {
  color: #64748b !important;
  font-style: italic !important;
}

/* No results message */
.gs-no-results-result .gs-snippet {
  color: #f87171 !important;
  font-style: italic !important;
  text-align: center !important;
}

/* Memory visualization styles */
.memory-node {
  position: relative;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.memory-node::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1));
  border-radius: inherit;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.memory-node:hover::before {
  opacity: 1;
}

/* Tone analysis visualization */
.tone-indicator {
  position: relative;
  overflow: hidden;
}

.tone-indicator::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
  transition: left 0.6s ease;
}

.tone-indicator:hover::before {
  left: 100%;
}

/* Semantic similarity visualization */
.similarity-bar {
  height: 4px;
  background: linear-gradient(90deg, #1e293b, #3b82f6);
  border-radius: 2px;
  position: relative;
  overflow: hidden;
}

.similarity-bar::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background: #60a5fa;
  border-radius: inherit;
  transition: width 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Tree visualization */
.tree-node {
  position: relative;
  padding: 12px;
  border-radius: 8px;
  background: rgba(51, 65, 85, 0.5);
  border: 1px solid rgba(71, 85, 105, 0.5);
  margin: 8px 0;
}

.tree-node::before {
  content: '';
  position: absolute;
  left: -20px;
  top: 50%;
  width: 20px;
  height: 1px;
  background: rgba(71, 85, 105, 0.7);
}

.tree-node.has-children::after {
  content: '';
  position: absolute;
  left: -1px;
  bottom: -8px;
  width: 1px;
  height: 16px;
  background: rgba(71, 85, 105, 0.7);
}

/* Recursive depth indicator */
.depth-indicator {
  width: 4px;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  border-radius: 0 2px 2px 0;
}

.depth-0 { background: #60a5fa; }
.depth-1 { background: #a78bfa; }
.depth-2 { background: #f472b6; }
.depth-3 { background: #fb7185; }
.depth-4 { background: #fbbf24; }

/* Export button animation */
.export-button {
  position: relative;
  overflow: hidden;
}

.export-button::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition: width 0.3s ease, height 0.3s ease;
}

.export-button:hover::before {
  width: 100%;
  height: 100%;
}

/* Mirror echo styling */
.mirror-echo {
  background: linear-gradient(135deg, rgba(147, 51, 234, 0.1), rgba(59, 130, 246, 0.1));
  border: 1px solid rgba(147, 51, 234, 0.3);
  position: relative;
}

.mirror-echo::before {
  content: '🪞';
  position: absolute;
  top: 12px;
  left: 12px;
  font-size: 18px;
  opacity: 0.7;
}

/* Responsive design */
@media (max-width: 768px) {
  .memory-panel {
    margin: 0 -24px;
    border-radius: 0;
    border-left: none;
    border-right: none;
  }
  
  .tree-view {
    font-size: 14px;
  }
  
  .gsc-webResult {
    margin: 0 -16px 16px -16px !important;
    border-radius: 0 !important;
    border-left: none !important;
    border-right: none !important;
  }
}

/* Animation keyframes */
@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

.animate-slide-in {
  animation: slideIn 0.5s ease-out;
}

.animate-fade-in {
  animation: fadeIn 0.3s ease-out;
}

/* Focus styles for accessibility */
input:focus,
button:focus {
  outline: 2px solid rgba(59, 130, 246, 0.5);
  outline-offset: 2px;
}

/* Selection styling */
::selection {
  background: rgba(59, 130, 246, 0.3);
  color: #ffffff;
}

/* Glassmorphism effect */
.glass {
  background: rgba(15, 23, 42, 0.7);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

/* Hover effects */
.hover-lift:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
}

.hover-glow:hover {
  box-shadow: 0 0 20px rgba(59, 130, 246, 0.3);
}

/* Text gradients */
.text-gradient {
  background: linear-gradient(135deg, #60a5fa, #a78bfa);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Custom scrollbar for memory panels */
.memory-panel::-webkit-scrollbar {
  width: 4px;
}

.memory-panel::-webkit-scrollbar-track {
  background: rgba(51, 65, 85, 0.3);
  border-radius: 2px;
}

.memory-panel::-webkit-scrollbar-thumb {
  background: rgba(59, 130, 246, 0.5);
  border-radius: 2px;
}

/* Loading skeleton */
.skeleton {
  background: linear-gradient(90deg, rgba(51, 65, 85, 0.5) 25%, rgba(71, 85, 105, 0.5) 50%, rgba(51, 65, 85, 0.5) 75%);
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
}

@keyframes loading {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}
import React, { useState, useEffect, useRef } from 'react';
import './App.css';

// ============================================================================
// CORE MEMORY COMPRESSION MODULE
// ============================================================================

class MirrorFoldMemoryCore {
  constructor() {
    this.compressionTree = new Map(); // Root level compression nodes
    this.sessionNodes = new Map(); // Current session tracking
    this.globalStats = {
      totalQueries: 0,
      compressionRatio: 0,
      avgDepth: 0,
      themes: new Set()
    };
    this.dbName = 'MirrorFoldDB';
    this.dbVersion = 1;
    this.db = null;
    
    this.initializeDB();
    this.loadCompressionTree();
  }

  // Initialize IndexedDB for persistent storage
  async initializeDB() {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(this.dbName, this.dbVersion);
      
      request.onerror = () => reject(request.error);
      request.onsuccess = () => {
        this.db = request.result;
        resolve();
      };
      
      request.onupgradeneeded = (event) => {
        const db = event.target.result;
        
        // Create compression nodes store
        if (!db.objectStoreNames.contains('compressionNodes')) {
          const nodeStore = db.createObjectStore('compressionNodes', { keyPath: 'id' });
          nodeStore.createIndex('theme', 'theme', { unique: false });
          nodeStore.createIndex('timestamp', 'timestamp', { unique: false });
          nodeStore.createIndex('parentId', 'parentId', { unique: false });
        }
        
        // Create sessions store
        if (!db.objectStoreNames.contains('sessions')) {
          const sessionStore = db.createObjectStore('sessions', { keyPath: 'id' });
          sessionStore.createIndex('timestamp', 'timestamp', { unique: false });
        }
      };
    });
  }

  // Create a new compression node
  createNode(query, toneAnalysis, searchResults = null, parentId = null) {
    const nodeId = this.generateNodeId();
    const timestamp = new Date().toISOString();
    
    const node = {
      id: nodeId,
      parentId: parentId,
      children: [],
      
      // Core data
      query: query.trim(),
      originalQuery: query.trim(),
      timestamp: timestamp,
      
      // Analysis results
      toneAnalysis: toneAnalysis,
      searchResults: searchResults,
      
      // Compression metadata
      theme: this.extractTheme(query, toneAnalysis),
      intentKeywords: this.extractIntentKeywords(query, toneAnalysis),
      semanticVector: null, // Will be computed by similarity engine
      
      // Interaction tracking
      confirmationGiven: false,
      refinementPath: [],
      feedbackScore: 0,
      accessCount: 1,
      lastAccessed: timestamp,
      
      // Recursion tracking
      depth: parentId ? this.getNodeDepth(parentId) + 1 : 0,
      recursionTriggers: [],
      mirrorEchoes: []
    };
    
    return node;
  }

  // Add node to compression tree
  async addNode(node) {
    // Store in memory
    this.compressionTree.set(node.id, node);
    
    // Update parent-child relationships
    if (node.parentId && this.compressionTree.has(node.parentId)) {
      const parent = this.compressionTree.get(node.parentId);
      parent.children.push(node.id);
      this.compressionTree.set(node.parentId, parent);
    }
    
    // Persist to IndexedDB
    await this.persistNode(node);
    
    // Update global stats
    this.updateGlobalStats();
    
    // Trigger compression analysis
    this.analyzeForCompression();
    
    return node.id;
  }

  // Extract theme from query and tone analysis
  extractTheme(query, toneAnalysis) {
    const words = query.toLowerCase().split(/\s+/);
    const themes = {
      'recursion': ['recursion', 'recursive', 'self-reference', 'loop', 'iterate', 'repeat'],
      'search': ['search', 'find', 'look', 'query', 'discover', 'explore'],
      'technology': ['ai', 'artificial', 'intelligence', 'machine', 'learning', 'algorithm', 'neural', 'deep'],
      'philosophy': ['meaning', 'purpose', 'truth', 'knowledge', 'wisdom', 'understanding', 'consciousness'],
      'memory': ['remember', 'recall', 'memory', 'past', 'history', 'previous', 'before'],
      'analysis': ['analyze', 'examine', 'study', 'investigate', 'research', 'review'],
      'reflection': ['think', 'reflect', 'consider', 'ponder', 'contemplate', 'mirror'],
      'emotional': toneAnalysis.emotionalTone !== 'neutral' ? [toneAnalysis.emotionalTone] : []
    };
    
    let maxScore = 0;
    let dominantTheme = 'general';
    
    for (const [theme, keywords] of Object.entries(themes)) {
      let score = 0;
      for (const keyword of keywords) {
        if (words.some(word => word.includes(keyword) || keyword.includes(word))) {
          score++;
        }
      }
      
      // Boost score based on tone intensity
      if (toneAnalysis.overallTone === 'intense' || toneAnalysis.urgencyLevel === 'high') {
        score *= 1.5;
      }
      
      if (score > maxScore) {
        maxScore = score;
        dominantTheme = theme;
      }
    }
    
    return dominantTheme;
  }

  // Extract intent-mapped keywords
  extractIntentKeywords(query, toneAnalysis) {
    const words = query.toLowerCase().split(/\s+/);
    const stopWords = new Set(['the', 'a', 'an', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for', 'of', 'with', 'by', 'is', 'are', 'was', 'were', 'be', 'been', 'have', 'has', 'had', 'do', 'does', 'did', 'will', 'would', 'could', 'should', 'may', 'might', 'can']);
    
    // Filter out stop words and extract meaningful terms
    const keywords = words
      .filter(word => word.length > 2 && !stopWords.has(word))
      .map(word => word.replace(/[^\w]/g, ''))
      .filter(word => word.length > 0);
    
    // Add intent modifiers based on tone analysis
    const intentModifiers = [];
    if (toneAnalysis.intentType === 'question') intentModifiers.push('inquiry');
    if (toneAnalysis.urgencyLevel === 'high') intentModifiers.push('urgent');
    if (toneAnalysis.emotionalTone !== 'neutral') intentModifiers.push(toneAnalysis.emotionalTone);
    
    return [...new Set([...keywords, ...intentModifiers])];
  }

  // Find similar nodes using semantic similarity
  findSimilarNodes(query, threshold = 0.3) {
    const queryKeywords = this.extractIntentKeywords(query, { intentType: 'unknown', urgencyLevel: 'low', emotionalTone: 'neutral' });
    const similarities = [];
    
    for (const [nodeId, node] of this.compressionTree) {
      const similarity = this.calculateSimilarity(queryKeywords, node.intentKeywords);
      if (similarity >= threshold) {
        similarities.push({
          nodeId,
          node,
          similarity,
          timeDiff: new Date() - new Date(node.timestamp)
        });
      }
    }
    
    // Sort by similarity score, then by recency
    return similarities.sort((a, b) => {
      if (Math.abs(a.similarity - b.similarity) < 0.1) {
        return a.timeDiff - b.timeDiff; // More recent first
      }
      return b.similarity - a.similarity; // Higher similarity first
    });
  }

  // Calculate similarity between keyword sets (TF-IDF inspired)
  calculateSimilarity(keywords1, keywords2) {
    if (!keywords1.length || !keywords2.length) return 0;
    
    const set1 = new Set(keywords1);
    const set2 = new Set(keywords2);
    const intersection = new Set([...set1].filter(x => set2.has(x)));
    const union = new Set([...set1, ...set2]);
    
    // Jaccard similarity with length weighting
    const jaccard = intersection.size / union.size;
    const lengthFactor = Math.min(keywords1.length, keywords2.length) / Math.max(keywords1.length, keywords2.length);
    
    return jaccard * lengthFactor;
  }

  // Analyze compression opportunities
  analyzeForCompression() {
    const compressionCandidates = [];
    const themeGroups = new Map();
    
    // Group nodes by theme
    for (const [nodeId, node] of this.compressionTree) {
      if (!themeGroups.has(node.theme)) {
        themeGroups.set(node.theme, []);
      }
      themeGroups.get(node.theme).push(node);
    }
    
    // Find compression opportunities within themes
    for (const [theme, nodes] of themeGroups) {
      if (nodes.length >= 2) {
        // Look for nodes with high similarity that can be compressed
        for (let i = 0; i < nodes.length - 1; i++) {
          for (let j = i + 1; j < nodes.length; j++) {
            const similarity = this.calculateSimilarity(
              nodes[i].intentKeywords,
              nodes[j].intentKeywords
            );
            
            if (similarity > 0.6) {
              compressionCandidates.push({
                node1: nodes[i],
                node2: nodes[j],
                similarity,
                theme,
                compressionType: 'merge'
              });
            }
          }
        }
      }
    }
    
    return compressionCandidates;
  }

  // Generate contextual reassessment triggers
  generateReassessmentTriggers(currentQuery, toneAnalysis) {
    const triggers = [];
    const similarNodes = this.findSimilarNodes(currentQuery, 0.4);
    
    // Theme repetition trigger
    if (similarNodes.length > 0) {
      const dominantTheme = this.extractTheme(currentQuery, toneAnalysis);
      const themeNodes = similarNodes.filter(s => s.node.theme === dominantTheme);
      
      if (themeNodes.length >= 2) {
        triggers.push({
          type: 'theme_repetition',
          theme: dominantTheme,
          relatedNodes: themeNodes.slice(0, 3),
          priority: 'high'
        });
      }
    }
    
    // Tone shift trigger
    if (similarNodes.length > 0) {
      const recentSimilar = similarNodes.filter(s => s.timeDiff < 300000); // 5 minutes
      if (recentSimilar.length > 0) {
        const previousTone = recentSimilar[0].node.toneAnalysis.overallTone;
        if (previousTone !== toneAnalysis.overallTone) {
          triggers.push({
            type: 'tone_shift',
            fromTone: previousTone,
            toTone: toneAnalysis.overallTone,
            relatedNode: recentSimilar[0].node,
            priority: 'medium'
          });
        }
      }
    }
    
    // Recursion depth trigger
    const queryDepth = currentQuery.split(/\s+/).length;
    if (queryDepth > 10 && toneAnalysis.intentType === 'question') {
      triggers.push({
        type: 'deep_inquiry',
        depth: queryDepth,
        priority: 'medium'
      });
    }
    
    return triggers;
  }

  // Generate mirror echo (reflection summary)
  generateMirrorEcho(triggers, similarNodes) {
    if (triggers.length === 0 && similarNodes.length === 0) {
      return null;
    }
    
    let reflection = "🪞 **Mirror Echo**: ";
    
    if (triggers.some(t => t.type === 'theme_repetition')) {
      const themeTrigger = triggers.find(t => t.type === 'theme_repetition');
      reflection += `You're exploring **${themeTrigger.theme}** again. Previous insights: `;
      
      const insights = themeTrigger.relatedNodes
        .map(rn => `"${rn.node.query.substring(0, 40)}..."`)
        .join(', ');
      reflection += insights;
    }
    
    if (triggers.some(t => t.type === 'tone_shift')) {
      const toneTrigger = triggers.find(t => t.type === 'tone_shift');
      reflection += ` Your approach shifted from **${toneTrigger.fromTone}** to **${toneTrigger.toTone}**.`;
    }
    
    if (similarNodes.length > 0) {
      reflection += ` This connects to ${similarNodes.length} previous queries.`;
    }
    
    return reflection;
  }

  // Export tree state to JSON
  exportTreeState() {
    const exportData = {
      metadata: {
        exportTimestamp: new Date().toISOString(),
        version: '1.0',
        totalNodes: this.compressionTree.size,
        globalStats: this.globalStats
      },
      compressionTree: Array.from(this.compressionTree.entries()),
      sessionNodes: Array.from(this.sessionNodes.entries())
    };
    
    return JSON.stringify(exportData, null, 2);
  }

  // Helper methods
  generateNodeId() {
    return 'node_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
  }

  getNodeDepth(nodeId) {
    const node = this.compressionTree.get(nodeId);
    return node ? node.depth : 0;
  }

  async persistNode(node) {
    if (!this.db) return;
    
    const transaction = this.db.transaction(['compressionNodes'], 'readwrite');
    const store = transaction.objectStore('compressionNodes');
    await store.put(node);
  }

  async loadCompressionTree() {
    if (!this.db) return;
    
    const transaction = this.db.transaction(['compressionNodes'], 'readonly');
    const store = transaction.objectStore('compressionNodes');
    const request = store.getAll();
    
    request.onsuccess = () => {
      const nodes = request.result;
      for (const node of nodes) {
        this.compressionTree.set(node.id, node);
      }
      this.updateGlobalStats();
    };
  }

  updateGlobalStats() {
    this.globalStats.totalQueries = this.compressionTree.size;
    
    const themes = new Set();
    let totalDepth = 0;
    
    for (const [_, node] of this.compressionTree) {
      themes.add(node.theme);
      totalDepth += node.depth;
    }
    
    this.globalStats.themes = themes;
    this.globalStats.avgDepth = this.compressionTree.size > 0 ? totalDepth / this.compressionTree.size : 0;
    this.globalStats.compressionRatio = this.calculateCompressionRatio();
  }

  calculateCompressionRatio() {
    // Simple compression ratio based on merged nodes vs total queries
    const mergedNodes = Array.from(this.compressionTree.values()).filter(n => n.children.length > 0);
    return this.compressionTree.size > 0 ? mergedNodes.length / this.compressionTree.size : 0;
  }
}

// ============================================================================
// ENHANCED SEMANTIC SIMILARITY ENGINE
// ============================================================================

class SemanticSimilarityEngine {
  constructor() {
    this.vocabularyIndex = new Map();
    this.documentFrequency = new Map();
    this.totalDocuments = 0;
    this.vectorCache = new Map();
  }

  // Build vocabulary index from corpus
  buildVocabulary(documents) {
    this.totalDocuments = documents.length;
    const vocabulary = new Set();
    
    documents.forEach((doc, docIndex) => {
      const tokens = this.tokenize(doc);
      const uniqueTokens = new Set(tokens);
      
      uniqueTokens.forEach(token => {
        vocabulary.add(token);
        
        if (!this.documentFrequency.has(token)) {
          this.documentFrequency.set(token, 0);
        }
        this.documentFrequency.set(token, this.documentFrequency.get(token) + 1);
      });
    });
    
    // Create vocabulary index
    Array.from(vocabulary).forEach((token, index) => {
      this.vocabularyIndex.set(token, index);
    });
  }

  // Tokenize text into meaningful terms
  tokenize(text) {
    const stopWords = new Set([
      'the', 'a', 'an', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for', 'of', 'with', 'by',
      'is', 'are', 'was', 'were', 'be', 'been', 'have', 'has', 'had', 'do', 'does', 'did',
      'will', 'would', 'could', 'should', 'may', 'might', 'can', 'this', 'that', 'these', 'those'
    ]);
    
    return text.toLowerCase()
      .replace(/[^\w\s]/g, ' ')
      .split(/\s+/)
      .filter(token => token.length > 2 && !stopWords.has(token))
      .map(token => this.stemWord(token));
  }

  // Simple stemming algorithm
  stemWord(word) {
    // Basic suffix removal
    const suffixes = ['ing', 'ed', 'er', 'est', 'ly', 'ion', 'tion', 'ness', 'ment'];
    
    for (const suffix of suffixes) {
      if (word.endsWith(suffix) && word.length > suffix.length + 2) {
        return word.slice(0, -suffix.length);
      }
    }
    
    return word;
  }

  // Calculate TF-IDF vector for document
  calculateTFIDF(document) {
    const cacheKey = document.substring(0, 100); // Use first 100 chars as cache key
    if (this.vectorCache.has(cacheKey)) {
      return this.vectorCache.get(cacheKey);
    }
    
    const tokens = this.tokenize(document);
    const termFreq = new Map();
    
    // Calculate term frequency
    tokens.forEach(token => {
      termFreq.set(token, (termFreq.get(token) || 0) + 1);
    });
    
    const vector = new Map();
    const vocabularySize = this.vocabularyIndex.size;
    
    // Calculate TF-IDF for each term
    for (const [term, tf] of termFreq) {
      if (this.vocabularyIndex.has(term)) {
        const df = this.documentFrequency.get(term) || 1;
        const idf = Math.log(this.totalDocuments / df);
        const tfidf = (tf / tokens.length) * idf;
        
        vector.set(this.vocabularyIndex.get(term), tfidf);
      }
    }
    
    this.vectorCache.set(cacheKey, vector);
    return vector;
  }

  // Calculate cosine similarity between two vectors
  calculateCosineSimilarity(vector1, vector2) {
    let dotProduct = 0;
    let norm1 = 0;
    let norm2 = 0;
    
    // Get all dimensions from both vectors
    const allDimensions = new Set([...vector1.keys(), ...vector2.keys()]);
    
    for (const dim of allDimensions) {
      const v1 = vector1.get(dim) || 0;
      const v2 = vector2.get(dim) || 0;
      
      dotProduct += v1 * v2;
      norm1 += v1 * v1;
      norm2 += v2 * v2;
    }
    
    if (norm1 === 0 || norm2 === 0) return 0;
    
    return dotProduct / (Math.sqrt(norm1) * Math.sqrt(norm2));
  }

  // Find similar documents
  findSimilar(queryDocument, corpus, threshold = 0.1) {
    // Build vocabulary if not already done
    if (this.vocabularyIndex.size === 0) {
      this.buildVocabulary([queryDocument, ...corpus]);
    }
    
    const queryVector = this.calculateTFIDF(queryDocument);
    const similarities = [];
    
    corpus.forEach((doc, index) => {
      const docVector = this.calculateTFIDF(doc);
      const similarity = this.calculateCosineSimilarity(queryVector, docVector);
      
      if (similarity >= threshold) {
        similarities.push({
          index,
          document: doc,
          similarity
        });
      }
    });
    
    return similarities.sort((a, b) => b.similarity - a.similarity);
  }
}

// ============================================================================
// ENHANCED UI COMPONENTS
// ============================================================================

const MirrorFoldApp = () => {
  const [memoryCore] = useState(() => new MirrorFoldMemoryCore());
  const [similarityEngine] = useState(() => new SemanticSimilarityEngine());
  const [currentQuery, setCurrentQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [mirrorEcho, setMirrorEcho] = useState(null);
  const [reassessmentTriggers, setReassessmentTriggers] = useState([]);
  const [similarNodes, setSimilarNodes] = useState([]);
  const [showMemoryPanel, setShowMemoryPanel] = useState(false);
  const [showTreeView, setShowTreeView] = useState(false);
  const [globalStats, setGlobalStats] = useState(memoryCore.globalStats);
  const [searchResults, setSearchResults] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [toneAnalysis, setToneAnalysis] = useState(null);

  const queryInputRef = useRef(null);

  // Enhanced LETRM (keeping existing functionality)
  const analyzeQuery = (query) => {
    const analysis = {
      emotionalTone: detectEmotionalTone(query),
      urgencyLevel: detectUrgency(query),
      intentType: detectIntent(query),
      overallTone: 'neutral'
    };
    
    // Simple overall tone calculation
    let score = 0;
    if (analysis.emotionalTone === 'positive') score += 2;
    else if (analysis.emotionalTone === 'negative') score -= 1;
    else if (analysis.emotionalTone === 'anxious') score -= 2;
    else if (analysis.emotionalTone === 'curious') score += 1;
    
    if (analysis.urgencyLevel === 'high') score += 3;
    else if (analysis.urgencyLevel === 'medium') score += 1;
    
    if (analysis.intentType === 'question') score += 1;
    else if (analysis.intentType === 'command') score += 2;
    
    if (score >= 3) analysis.overallTone = 'intense';
    else if (score >= 1) analysis.overallTone = 'engaged';
    else if (score <= -3) analysis.overallTone = 'distressed';
    else if (score <= -1) analysis.overallTone = 'reserved';
    
    return analysis;
  };

  const detectEmotionalTone = (text) => {
    const emotionalWords = {
      positive: ['love', 'happy', 'joy', 'excited', 'wonderful', 'great', 'amazing', 'best'],
      negative: ['hate', 'angry', 'sad', 'upset', 'terrible', 'worst', 'awful', 'bad'],
      anxious: ['worry', 'anxious', 'nervous', 'scared', 'fear', 'concerned', 'stress'],
      curious: ['why', 'how', 'what', 'when', 'where', 'explain', 'understand', 'learn']
    };

    const scores = { positive: 0, negative: 0, anxious: 0, curious: 0 };
    const words = text.toLowerCase().split(/\s+/);
    
    for (const word of words) {
      for (const tone in emotionalWords) {
        if (emotionalWords[tone].includes(word)) {
          scores[tone]++;
        }
      }
    }

    let maxScore = 0;
    let dominantTone = 'neutral';
    for (const tone in scores) {
      if (scores[tone] > maxScore) {
        maxScore = scores[tone];
        dominantTone = tone;
      }
    }

    return maxScore > 0 ? dominantTone : 'neutral';
  };

  const detectUrgency = (text) => {
    const urgencyMarkers = ['!', 'urgent', 'now', 'immediately', 'asap', 'quick', 'fast', 'emergency'];
    let score = 0;
    
    urgencyMarkers.forEach(marker => {
      if (text.toLowerCase().includes(marker.toLowerCase())) score++;
    });
    
    const exclamationCount = (text.match(/!/g) || []).length;
    score += Math.min(exclamationCount, 3);
    
    if (score >= 5) return 'high';
    if (score >= 2) return 'medium';
    return 'low';
  };

  const detectIntent = (text) => {
    if (text.endsWith('?')) return 'question';
    
    const questionWords = ['who', 'what', 'when', 'where', 'why', 'how', 'can', 'could', 'would', 'should'];
    const firstWord = text.split(/\s+/)[0].toLowerCase();
    if (questionWords.includes(firstWord)) return 'question';
    
    const commandWords = ['find', 'search', 'look up', 'show', 'give', 'tell', 'explain'];
    if (commandWords.some(word => text.toLowerCase().startsWith(word.toLowerCase()))) {
      return 'command';
    }
    
    return 'statement';
  };

  // Handle query input changes
  const handleQueryChange = (e) => {
    const query = e.target.value;
    setCurrentQuery(query);
    
    if (query.length > 3) {
      const analysis = analyzeQuery(query);
      setToneAnalysis(analysis);
      
      // Find similar nodes and generate reassessment triggers
      const similar = memoryCore.findSimilarNodes(query, 0.3);
      setSimilarNodes(similar);
      
      const triggers = memoryCore.generateReassessmentTriggers(query, analysis);
      setReassessmentTriggers(triggers);
      
      // Generate mirror echo if there are insights to show
      if (triggers.length > 0 || similar.length > 0) {
        const echo = memoryCore.generateMirrorEcho(triggers, similar);
        setMirrorEcho(echo);
      } else {
        setMirrorEcho(null);
      }
      
      // Show memory panel if there are related queries
      setShowMemoryPanel(similar.length > 0);
    } else {
      setToneAnalysis(null);
      setSimilarNodes([]);
      setReassessmentTriggers([]);
      setMirrorEcho(null);
      setShowMemoryPanel(false);
    }
  };

  // Handle search submission
  const handleSearch = async (e) => {
    e.preventDefault();
    if (!currentQuery.trim()) return;
    
    const analysis = toneAnalysis || analyzeQuery(currentQuery);
    
    // Show confirmation dialog first
    setShowConfirmation(true);
  };

  // Proceed with actual search
  const proceedWithSearch = async () => {
    setShowConfirmation(false);
    setIsSearching(true);
    
    try {
      // Create and store memory node
      const node = memoryCore.createNode(currentQuery, toneAnalysis);
      await memoryCore.addNode(node);
      
      // Perform Google CSE search
      await performGoogleSearch(currentQuery);
      
      // Update global stats
      setGlobalStats({ ...memoryCore.globalStats });
      
    } catch (error) {
      console.error('Search error:', error);
      setSearchResults({ error: 'Search failed. Please try again.' });
    } finally {
      setIsSearching(false);
    }
  };

  // Perform Google Custom Search
  const performGoogleSearch = async (query) => {
    return new Promise((resolve) => {
      // Use existing Google CSE integration
      if (window.google && window.google.search && window.google.search.cse) {
        const element = window.google.search.cse.element.getElement('searchresults-only');
        if (element) {
          element.execute(query);
          setSearchResults({ success: true, query });
          resolve();
        } else {
          setSearchResults({ error: 'Search engine not initialized' });
          resolve();
        }
      } else {
        // Fallback for demo
        setTimeout(() => {
          setSearchResults({ 
            success: true, 
            query,
            message: 'Search completed. Results would appear below in production.'
          });
          resolve();
        }, 1000);
      }
    });
  };

  // Export memory tree
  const exportMemoryTree = () => {
    const exportData = memoryCore.exportTreeState();
    const blob = new Blob([exportData], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `mirrorfold-memory-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="border-b border-slate-700/50 bg-slate-900/80 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                <span className="text-white font-bold text-lg">🪞</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">MirrorFold</h1>
                <p className="text-slate-400 text-sm">Recursive Search Engine</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setShowMemoryPanel(!showMemoryPanel)}
                className="px-3 py-2 rounded-lg bg-slate-700 hover:bg-slate-600 text-white text-sm transition-colors"
              >
                Memory ({globalStats.totalQueries})
              </button>
              <button
                onClick={() => setShowTreeView(!showTreeView)}
                className="px-3 py-2 rounded-lg bg-slate-700 hover:bg-slate-600 text-white text-sm transition-colors"
              >
                Tree View
              </button>
              <button
                onClick={exportMemoryTree}
                className="px-3 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-sm transition-colors"
              >
                Export
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-8">
        {/* Mirror Echo */}
        {mirrorEcho && (
          <div className="mb-6 p-4 rounded-xl bg-gradient-to-r from-purple-900/20 to-blue-900/20 border border-purple-500/30">
            <div className="text-purple-200 text-sm" dangerouslySetInnerHTML={{ __html: mirrorEcho.replace(/\*\*(.*?)\*\*/g, '<strong class="text-purple-100">$1</strong>') }} />
          </div>
        )}

        {/* Memory Panel */}
        {showMemoryPanel && similarNodes.length > 0 && (
          <div className="mb-6 p-4 rounded-xl bg-slate-800/50 border border-slate-600/50">
            <h3 className="text-lg font-semibold text-white mb-3">Related Memories</h3>
            <div className="space-y-2">
              {similarNodes.slice(0, 5).map((similar, index) => (
                <div
                  key={similar.nodeId}
                  className="p-3 rounded-lg bg-slate-700/50 hover:bg-slate-700 cursor-pointer transition-colors"
                  onClick={() => setCurrentQuery(similar.node.query)}
                >
                  <div className="text-slate-300 text-sm">
                    "{similar.node.query}"
                  </div>
                  <div className="flex items-center space-x-4 mt-1 text-xs text-slate-400">
                    <span>Theme: {similar.node.theme}</span>
                    <span>Similarity: {(similar.similarity * 100).toFixed(1)}%</span>
                    <span>{new Date(similar.node.timestamp).toLocaleDateString()}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Search Form */}
        <form onSubmit={handleSearch} className="mb-8">
          <div className="relative">
            <input
              ref={queryInputRef}
              type="text"
              value={currentQuery}
              onChange={handleQueryChange}
              placeholder="Fold your query into the infinite..."
              className="w-full px-6 py-4 text-lg rounded-2xl bg-slate-800/80 border border-slate-600/50 text-white placeholder-slate-400 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all"
              disabled={isSearching}
            />
            <button
              type="submit"
              disabled={!currentQuery.trim() || isSearching}
              className="absolute right-2 top-1/2 -translate-y-1/2 px-6 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium hover:from-blue-500 hover:to-purple-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              {isSearching ? 'Reflecting...' : 'Reflect'}
            </button>
          </div>
          
          {/* Tone Indicators */}
          {toneAnalysis && (
            <div className="mt-3 flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-full text-xs bg-blue-500/20 text-blue-200 border border-blue-500/30">
                {toneAnalysis.overallTone}
              </span>
              {toneAnalysis.urgencyLevel !== 'low' && (
                <span className="px-3 py-1 rounded-full text-xs bg-red-500/20 text-red-200 border border-red-500/30">
                  {toneAnalysis.urgencyLevel} urgency
                </span>
              )}
              {toneAnalysis.emotionalTone !== 'neutral' && (
                <span className="px-3 py-1 rounded-full text-xs bg-purple-500/20 text-purple-200 border border-purple-500/30">
                  {toneAnalysis.emotionalTone}
                </span>
              )}
            </div>
          )}
        </form>

        {/* Confirmation Dialog */}
        {showConfirmation && (
          <div className="mb-8 p-6 rounded-xl bg-slate-800/80 border border-slate-600/50">
            <p className="text-white text-lg mb-4">
              For clarification, you searched for: <span className="text-blue-300 font-medium">"{currentQuery}"</span>
            </p>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={proceedWithSearch}
                className="px-6 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium hover:from-blue-500 hover:to-purple-500 transition-all"
              >
                Proceed
              </button>
              <button
                onClick={() => {
                  setShowConfirmation(false);
                  queryInputRef.current?.focus();
                }}
                className="px-6 py-2 rounded-lg bg-slate-700 hover:bg-slate-600 text-white transition-colors"
              >
                Refine
              </button>
              <button
                onClick={() => setShowConfirmation(false)}
                className="px-6 py-2 rounded-lg bg-slate-600 hover:bg-slate-500 text-white transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        )}

        {/* Search Results */}
        {searchResults && (
          <div className="mb-8 p-6 rounded-xl bg-slate-800/50 border border-slate-600/50">
            <h3 className="text-lg font-semibold text-white mb-4">Search Results</h3>
            {searchResults.error ? (
              <div className="text-red-300">{searchResults.error}</div>
            ) : (
              <div>
                <div className="text-slate-300 mb-4">
                  {searchResults.message || `Search completed for: "${searchResults.query}"`}
                </div>
                {/* Google CSE results will appear here */}
                <div className="gcse-searchresults-only"></div>
              </div>
            )}
          </div>
        )}

        {/* Tree View */}
        {showTreeView && (
          <div className="mb-8 p-6 rounded-xl bg-slate-800/50 border border-slate-600/50">
            <h3 className="text-lg font-semibold text-white mb-4">Memory Compression Tree</h3>
            <div className="text-slate-300 text-sm">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div className="p-3 rounded-lg bg-slate-700/50">
                  <div className="text-blue-300 font-medium">Total Nodes</div>
                  <div className="text-2xl">{globalStats.totalQueries}</div>
                </div>
                <div className="p-3 rounded-lg bg-slate-700/50">
                  <div className="text-purple-300 font-medium">Themes</div>
                  <div className="text-2xl">{globalStats.themes.size}</div>
                </div>
                <div className="p-3 rounded-lg bg-slate-700/50">
                  <div className="text-green-300 font-medium">Avg Depth</div>
                  <div className="text-2xl">{globalStats.avgDepth.toFixed(1)}</div>
                </div>
              </div>
              
              {Array.from(globalStats.themes).length > 0 && (
                <div>
                  <div className="font-medium mb-2">Active Themes:</div>
                  <div className="flex flex-wrap gap-2">
                    {Array.from(globalStats.themes).map(theme => (
                      <span
                        key={theme}
                        className="px-3 py-1 rounded-full bg-slate-600/50 text-slate-300 text-xs"
                      >
                        {theme}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Footer */}
        <footer className="text-center text-slate-400 text-sm py-8">
          <p>"Truth under pressure validates structure. Structure under recursion reveals tone."</p>
        </footer>
      </main>

      {/* Google CSE Script - Keep existing integration */}
      <script async src="https://cse.google.com/cse.js?cx=a2ec05bde1c144f1b"></script>
    </div>
  );
};

export default MirrorFoldApp;
@tailwind base;
@tailwind components;
@tailwind utilities;

body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
        "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
        "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
        monospace;
}



@layer base {
  :root {
        --background: 0 0% 100%;
        --foreground: 0 0% 3.9%;
        --card: 0 0% 100%;
        --card-foreground: 0 0% 3.9%;
        --popover: 0 0% 100%;
        --popover-foreground: 0 0% 3.9%;
        --primary: 0 0% 9%;
        --primary-foreground: 0 0% 98%;
        --secondary: 0 0% 96.1%;
        --secondary-foreground: 0 0% 9%;
        --muted: 0 0% 96.1%;
        --muted-foreground: 0 0% 45.1%;
        --accent: 0 0% 96.1%;
        --accent-foreground: 0 0% 9%;
        --destructive: 0 84.2% 60.2%;
        --destructive-foreground: 0 0% 98%;
        --border: 0 0% 89.8%;
        --input: 0 0% 89.8%;
        --ring: 0 0% 3.9%;
        --chart-1: 12 76% 61%;
        --chart-2: 173 58% 39%;
        --chart-3: 197 37% 24%;
        --chart-4: 43 74% 66%;
        --chart-5: 27 87% 67%;
        --radius: 0.5rem;
    }
  .dark {
        --background: 0 0% 3.9%;
        --foreground: 0 0% 98%;
        --card: 0 0% 3.9%;
        --card-foreground: 0 0% 98%;
        --popover: 0 0% 3.9%;
        --popover-foreground: 0 0% 98%;
        --primary: 0 0% 98%;
        --primary-foreground: 0 0% 9%;
        --secondary: 0 0% 14.9%;
        --secondary-foreground: 0 0% 98%;
        --muted: 0 0% 14.9%;
        --muted-foreground: 0 0% 63.9%;
        --accent: 0 0% 14.9%;
        --accent-foreground: 0 0% 98%;
        --destructive: 0 62.8% 30.6%;
        --destructive-foreground: 0 0% 98%;
        --border: 0 0% 14.9%;
        --input: 0 0% 14.9%;
        --ring: 0 0% 83.1%;
        --chart-1: 220 70% 50%;
        --chart-2: 160 60% 45%;
        --chart-3: 30 80% 55%;
        --chart-4: 280 65% 60%;
        --chart-5: 340 75% 55%;
    }
}



@layer base {
  * {
    @apply border-border;
    }
  body {
    @apply bg-background text-foreground;
    }
}
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
