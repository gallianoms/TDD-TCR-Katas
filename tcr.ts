import { spawn } from 'child_process'

function runCommand(command: string, args: string[] = []): Promise<void> {
  return new Promise((resolve, reject) => {
    const process = spawn(command, args, { stdio: 'inherit' })

    process.on('close', (code) => {
      if (code === 0) {
        resolve()
      } else {
        reject(new Error(`Command failed with code ${code}`))
      }
    })
  })
}

async function runTCR() {
  try {
    console.log('Running tests...')
    await runCommand('npx', ['jest', '--no-watch'])

    console.log('Tests passed. Committing...')
    await runCommand('git', ['add', '.'])
    await runCommand('git', ['commit', '-m', 'TCR: Tests passed'])
  } catch (error) {
    console.log('Tests failed. Reverting...')
    await runCommand('git', ['reset', '--hard'])
    process.exit(1)
  }
}

runTCR().catch((error) => {
  console.error('Error:', error)
  process.exit(1)
})
