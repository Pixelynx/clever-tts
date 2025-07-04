# Changelog

## [0.1.0]

## [2025-07-03]
### [client]

### Added
- Husky pre-commit hook with comprehensive staged file validation
- Husky pre-push hook with full codebase validation and build verification
- Automated code quality enforcement with lint-staged integration
- Shell script error handling with proper exit codes and developer feedback
- Timing information display for pre-push validation process

- Comprehensive ESLint configuration with TypeScript support using flat config format
- TypeScript ESLint parser with type information generation for advanced rule checking
- Strict TypeScript rules including no-unused-vars, no-explicit-any, and prefer-optional-chain
- React and Next.js specific linting rules with proper JSX and hooks validation
- Code quality enforcement with prefer-const, no-var, and consistent formatting rules
- Import organization rules with automatic sorting and grouping
- Basic accessibility (a11y) rules for better web standards compliance
- Project-specific style rules including quote consistency, semicolons, and spacing
- Separate rule configurations for test files with relaxed TypeScript restrictions
- Comprehensive ignore patterns for build outputs, config files, and dependencies

    ### Dependencies
    - Added @typescript-eslint/eslint-plugin for TypeScript-specific linting rules
    - Added @typescript-eslint/parser for TypeScript code parsing with type information
    - Added eslint-plugin-react for React component linting
    - Added eslint-plugin-react-hooks for React Hooks rules validation
    - Updated existing eslint-plugin-import and eslint-plugin-jsx-a11y integrations

### Changed
- Updated Jest test script to use --passWithNoTests flag for zero-test environments
- Enhanced npm scripts with consistent test command options across watch and coverage modes
- Improved developer experience with clear validation step messaging and failure recovery instructions

### Fixed
- Implemented proper shell script permissions (chmod +x) for Husky hook execution
- Added comprehensive error handling to prevent commits/pushes with failing code quality checks

## [2025-07-01]
### [client]

### Added
- Custom Tailwind CSS configuration with primary, secondary, and tertiary color palette
- Extended color system with background, text, success, error, and border color palettes
- Typography enhancements (custom fonts, font sizes with line heights)
- Custom animations and keyframes (fade, slide, bounce, scale, float effects)
- Custom spacing values (18, 88, 128) and border radius (4xl, 5xl)
- Dark mode support with class-based approach
- Updated app metadata with project-specific title and description
- Comprehensive color testing page with all custom color variants
- Project-specific README.md with Clever TTS description and feature overview
- TypeScript configuration with core application types (TTSConfig, TextProcessingResult, AudioControls)
- Utility functions including cn() for Tailwind class merging and text processing helpers
- Application constants for TTS defaults, character limits, and app configuration
- clsx and tailwind-merge dependencies for enhanced class name handling

### Changed
- Rolled back from Tailwind CSS v4 (beta) to v3.4.16 (stable) for production reliability
- Migrated configuration from v4 CSS-based format to v3 JavaScript config format
- Simplified PostCSS configuration for standard Tailwind v3 setup
- Updated package.json dependencies to use stable Tailwind v3 ecosystem

### Fixed
- Eliminated hydration errors by using stable Tailwind v3 dark mode implementation
- Removed complex CSS variable workarounds required by Tailwind v4 beta
- Fixed custom color utility class generation issues
- Removed dangerouslySetInnerHTML security concerns