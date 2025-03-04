<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
  <xsl:template match="/">
      <html>
        <body>
        <style>
          
          .body{
            
            background-color: black;
            
            }
        </style>
        
        <h1>Notas alumnado</h1>
          <table border="1">
            <tr>
                <th>Entornos de desarrollo</th>
                <th>Programación</th>
                <th>Lenguaje de Marcas</th>
                <th>Nota media</th>
            </tr>
            <xsl:for-each select="notas/alumno">
                <tr>
                    <td><xsl:value-of select="EntornosdeDesarrollo"/></td>
                    <td><xsl:value-of select="Programacion"/></td>
                    <td><xsl:value-of select="LenguajedeMarcas"/></td>
                    <td><xsl:value-of select="(number(EntornosdeDesarrollo) + number(Programacion) + number(LenguajedeMarcas)) div 3"/></td>
                </tr>
            </xsl:for-each>
        </table>
        </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
