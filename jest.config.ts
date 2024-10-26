import type { Config } from 'jest'

const config: Config = {
  // Preset para TypeScript
  preset: 'ts-jest',

  // Entorno de pruebas
  testEnvironment: 'node',

  // Directorio raíz para buscar tests
  roots: ['<rootDir>'],

  // Transformación para archivos TypeScript
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },

  // Extensiones de archivo que Jest debe procesar
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],

  // Patrones para detectar archivos de test
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',

  // Configuración existente que mantenemos
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',

  // Configuración adicional para reportes de cobertura
  coverageReporters: ['json', 'text', 'lcov', 'clover'],

  // Ignorar node_modules en las transformaciones
  transformIgnorePatterns: ['/node_modules/', '\\.pnp\\.[^\\/]+$'],
}

export default config
