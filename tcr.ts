import { exec } from 'child_process'

// Ejecutar los tests
exec('npm test', (err) => {
  if (err) {
    // Si fallan los tests, revertimos cambios
    console.log('Tests failed. Reverting...')
    exec('git reset --hard')
  } else {
    // Si los tests pasan, hacemos commit
    console.log('Tests passed. Committing...')
    exec("git add . && git commit -m 'TCR: Tests passed'")
  }
})
