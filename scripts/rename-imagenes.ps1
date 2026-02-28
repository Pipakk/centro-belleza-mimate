# Renombra las imagenes que ya estan en public/images/services y public/images/gallery
# Ejecutar desde la raiz del proyecto: .\scripts\rename-imagenes.ps1

$proyecto = Split-Path -Parent $PSScriptRoot
$dirImages = Join-Path $proyecto "public\images"
$dirServices = Join-Path $dirImages "services"
$dirGallery = Join-Path $dirImages "gallery"

# Servicios: por orden en carpeta (1.º=manicura japonesa ... 5.º=masajes). Se mueven a public/images/
$servicios = @(
  @("Captura de pantalla 2026-02-28 115137.png", "manicura-japonesa.png"),
  @("Captura de pantalla 2026-02-28 115206.png", "manicura-pedicura.png"),
  @("Captura de pantalla 2026-02-28 115301.png", "presoterapia.png"),
  @("Captura de pantalla 2026-02-28 115329.png", "maderoterapia.png"),
  @("Captura de pantalla 2026-02-28 115350.png", "masajes.png")
)
# Galeria: nombre captura -> 01.png .. 08.png
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

# Renombrar y mover servicios a public/images/
foreach ($c in $servicios) {
  $src = Join-Path $dirServices $c[0]
  $dst = Join-Path $dirImages $c[1]
  if (Test-Path -LiteralPath $src) {
    Move-Item -LiteralPath $src -Destination $dst -Force
    Write-Host "OK servicio: $($c[1])"
  }
}

# Renombrar en galeria (01.png ... 08.png)
foreach ($c in $galeria) {
  $src = Join-Path $dirGallery $c[0]
  $dst = Join-Path $dirGallery $c[1]
  if (Test-Path -LiteralPath $src) {
    Rename-Item -LiteralPath $src -NewName $c[1] -Force
    Write-Host "OK galeria: $($c[1])"
  }
}

Write-Host "`nListo."
