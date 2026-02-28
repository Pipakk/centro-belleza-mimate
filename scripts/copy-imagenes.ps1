# Copia las imagenes desde Screenshots a public/images
# Ejecutar desde la raiz del proyecto: .\scripts\copy-imagenes.ps1

$origen = "C:\Users\pablo.garcia\Pictures\Screenshots"
$proyecto = Split-Path -Parent (Split-Path -Parent $PSScriptRoot)
$destImages = Join-Path $proyecto "public\images"
$destGallery = Join-Path $destImages "gallery"

New-Item -ItemType Directory -Force -Path $destImages | Out-Null
New-Item -ItemType Directory -Force -Path $destGallery | Out-Null

# Orden: 1 manicura japonesa, 2 manicura y pedicura, 3 presoterapia, 4 maderoterapia, 5 masajes, 6-13 galeria 01-08
$servicios = @(
  @("Captura de pantalla 2026-02-28 115040.png", "manicura-japonesa.png"),
  @("Captura de pantalla 2026-02-28 115137.png", "manicura-pedicura.png"),
  @("Captura de pantalla 2026-02-28 115301.png", "presoterapia.png"),
  @("Captura de pantalla 2026-02-28 115350.png", "maderoterapia.png"),
  @("Captura de pantalla 2026-02-28 115329.png", "masajes.png")
)
$galeria = @(
  @("Captura de pantalla 2026-02-28 115206.png", "01.png"),
  @("Captura de pantalla 2026-02-28 115430.png", "02.png"),
  @("Captura de pantalla 2026-02-28 115449.png", "03.png"),
  @("Captura de pantalla 2026-02-28 115511.png", "04.png"),
  @("Captura de pantalla 2026-02-28 115526.png", "05.png"),
  @("Captura de pantalla 2026-02-28 115539.png", "06.png"),
  @("Captura de pantalla 2026-02-28 115556.png", "07.png"),
  @("Captura de pantalla 2026-02-28 115637.png", "08.png")
)

$ok = 0
$fail = 0
foreach ($c in $servicios) {
  $src = Join-Path $origen $c[0]
  if (Test-Path -LiteralPath $src) {
    Copy-Item -LiteralPath $src -Destination (Join-Path $destImages $c[1]) -Force
    Write-Host "OK servicios: $($c[1])"
    $ok++
  } else {
    Write-Host "NO ENCONTRADO: $($c[0])"
    $fail++
  }
}
foreach ($c in $galeria) {
  $src = Join-Path $origen $c[0]
  if (Test-Path -LiteralPath $src) {
    Copy-Item -LiteralPath $src -Destination (Join-Path $destGallery $c[1]) -Force
    Write-Host "OK galeria: $($c[1])"
    $ok++
  } else {
    Write-Host "NO ENCONTRADO: $($c[0])"
    $fail++
  }
}
Write-Host "`nCopiadas: $ok. No encontradas: $fail."
if ($fail -gt 0) {
  Write-Host "Comprueba la ruta: $origen"
}
