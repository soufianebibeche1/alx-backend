# Caching Project

## Table of Contents
1. [Introduction](#introduction)
2. [Learning Objectives](#learning-objectives)
3. [Requirements](#requirements)
4. [Cache Replacement Policies](#cache-replacement-policies)
5. [BaseCaching Class](#basecaching-class)
6. [Project Structure](#project-structure)
7. [Usage](#usage)
8. [Testing](#testing)
9. [References](#references)

## Introduction
This project focuses on different caching algorithms and their implementations. Caching is a crucial optimization technique used in computing to store frequently accessed data temporarily, reducing access time and improving performance. You will learn about various cache replacement policies and implement them in Python.

## Learning Objectives
By the end of this project, you should be able to explain:
- What a caching system is
- What FIFO, LIFO, LRU, MRU, and LFU mean
- The purpose of a caching system
- The limitations of a caching system

## Requirements
### Python Scripts
- All scripts will be interpreted/compiled on Ubuntu 18.04 LTS using Python 3.7.
- All files should end with a new line.
- The first line of all files should be `#!/usr/bin/env python3`.
- A `README.md` file at the root of the project is mandatory.
- Code should adhere to the pycodestyle style (version 2.5).
- All files must be executable.
- Files will be tested for length using `wc`.
- Modules, classes, and functions must have documentation.

## Cache Replacement Policies
You will implement the following cache replacement policies:
- **FIFO (First In First Out)**: The oldest entry is removed when the cache reaches its limit.
- **LIFO (Last In First Out)**: The most recently added entry is removed when the cache reaches its limit.
- **LRU (Least Recently Used)**: The least recently used entry is removed when the cache reaches its limit.
- **MRU (Most Recently Used)**: The most recently used entry is removed when the cache reaches its limit.
- **LFU (Least Frequently Used)**: The least frequently used entry is removed when the cache reaches its limit.

## BaseCaching Class
All your classes must inherit from the `BaseCaching` class. This class defines the constants and methods necessary for your caching system:

## Project Structure

The project should include the following files and directories:

Copier le code
.
├── README.md
├── base_caching.py
├── fifo_cache.py
├── lifo_cache.py
├── lru_cache.py
├── mru_cache.py
└── lfu_cache.py
