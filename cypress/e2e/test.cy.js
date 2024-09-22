const URL = "http://localhost:5173/" ;

describe('General Test', () => {

    beforeEach(() => {
        cy.visit(URL);
      });

    it("Find the title", () => {
    cy.contains("h1", "Welcome to Memotest")
    })

    it("Check if button exists", () => {
        cy.get('#start').should('exist');
      });
    
    it("Click start button", () => {
        cy.get('#start').click();
      });
    
    it("Should display the boardgame after clicking start", () => {
        cy.get('#start').click(); 
        cy.get('#board').should('be.visible')
        cy.get('.square').should('have.length', 12);
      });
    
    it("Check random colours", () => {
        let originalSquares = []
        let shuffledSquares = []

        cy.get(".square").then( squares => {
            squares.each((i, square) => {
                originalSquares.push(square.className)
            });
        })

        cy.visit(URL)

        cy.get(".square").then( squares => {
            squares.each((i, square) => {
                shuffledSquares.push(square.className)
            });

            cy.wrap(originalSquares).should('not.deep.equal', shuffledSquares);
        })
    })

    it("should not win the game", () => {
        cy.get('#start').click();
        let pairsList

        cy.get(".square").then( squares => {
            const pairsMap = getPairSquares(squares)
            pairsList = Object.values(pairsMap)

            pairsList.forEach(pair => {
                cy.get(pair[0]).click()
            });
        })
        cy.get('.square').should('have.length', 12);
     })

    it("should win the game when all pairs are matched", () => {
        cy.get('#start').click();
        let pairsList

        cy.get(".square").then( squares => {
            const pairsMap = getPairSquares(squares)
            pairsList = Object.values(pairsMap)

            pairsList.forEach(pair => {
                cy.get(pair[0]).click()
                cy.get(pair[1]).click()
            });
        })
        cy.get('.square').should('have.length', 0);
     })
      
  })

  function getPairSquares(squares){
    let pairs = {}

    squares.each((i, square) => {
        const classColour = square.className.replace("square h-100 w-100 hide ", "")

        if(pairs[classColour]) {
            pairs[classColour].push(square)
        } else {
            pairs[classColour] = [square]
        }
    })

    return pairs
  }