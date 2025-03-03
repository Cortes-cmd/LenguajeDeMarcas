<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
  <xsl:template match="/">
        <html>
            <head>
                <title>Notas de Alumnos</title>
            </head>
            <body>
                <h2>Notas de Alumnos</h2>
                <table>
                    <tr>
                        <th>Nota 1</th>
                        <th>Nota 2</th>
                        <th>Nota 3</th>
                        <th>Media</th>
                    </tr>
                    <xsl:for-each select="notas/alumno">
                        <tr>
                            <td><xsl:value-of select="nota1"/></td>
                            <td><xsl:value-of select="nota2"/></td>
                            <td><xsl:value-of select="nota3"/></td>
                           <!-- Cálculo de media -->
                            <td>
                                <xsl:value-of select="(number(nota1) + number(nota2) + number(nota3)) div 3"/>
                            </td>
                            
                            <!-- Multiplicación de notas -->
                            <td>
                                <xsl:value-of select="number(nota1) * number(nota2) * number(nota3)"/>
                            </td>
                            
                            <!-- Porcentaje de Nota 1 respecto a la suma de las tres notas -->
                            <td>
                                <xsl:value-of select="(number(nota1) div (number(nota1) + number(nota2) + number(nota3))) * 100"/>%
                            </td>
                        </tr>
                    </xsl:for-each>
                </table>
            </body>
        </html>
  </xsl:template>
</xsl:stylesheet>
 