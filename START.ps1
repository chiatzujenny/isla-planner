$taskNode = Get-Command node -ErrorAction SilentlyContinue
if ($taskNode) {
    & $taskNode.Source (Join-Path $PSScriptRoot 'server.mjs')
} else {
    $taskRuntime = Join-Path $env:USERPROFILE '.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe'
    if (Test-Path -LiteralPath $taskRuntime) { & $taskRuntime (Join-Path $PSScriptRoot 'server.mjs') }
    else { Write-Error 'Node.js 20+ is required. Install it, then run npm start.' }
}
