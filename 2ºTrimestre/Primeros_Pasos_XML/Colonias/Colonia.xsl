<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
  <xsl:template match="/">
  
  <html>
  <body>
    <h2>Listado de elementos del XML</h2>
    <table border="2">
      <tr>
      <td>Nombre</td>
      <td>Marca</td>
      <td>Cantidad</td>
      <td>Precio</td>
      <td>Precio*cantidad</td>
      </tr>
      <xsl:for-each select="colonias/colonia">
        <tr>
        <td><xsl:value-of select="nombre"/></td>
        <td><xsl:value-of select="marca"/></td>
        <td><xsl:value-of select="cantidad"/></td>
        <td><xsl:value-of select="precio"/></td>
        <td><xsl:value-of select="precio*cantidad"/></td>
        </tr>
      </xsl:for-each>
    </table>
  </body>
  </html>
  </xsl:template>
</xsl:stylesheet>
