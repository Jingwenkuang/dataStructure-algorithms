// There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.

// For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
// Return true if you can finish all courses. Otherwise, return false.

 

// Example 1:

// Input: numCourses = 2, prerequisites = [[1,0]]
// Output: true
// Explanation: There are a total of 2 courses to take. 
// To take course 1 you should have finished course 0. So it is possible.
// Example 2:

// Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
// Output: false
// Explanation: There are a total of 2 courses to take. 
// To take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1. So it is impossible.

function buildGraph(prerequisities) {
    let graph = {};
    prerequisities.forEach((prereq) => {
        let [course, pre] = prereq.map(String); //let both key and value be string
        
        if (course in graph) {
            graph[course].push(pre);
        } else {
            graph[course] = [pre];
        }
        
        if (!(pre in graph)) {
            graph[pre] =[];
        }
    });
    return graph;
}

var canFinish = function(numCourses, prerequisites) {
    let prereq = buildGraph(prerequisites);
    let totalCourse = Object.keys(prereq).length;
    let completed = new Set();
    
    let eligibleCourseExists = true;
    while(eligibleCourseExists) {
        eligibleCourseExists = false;
        
        for (let course in prereq) {
            let everyPreBeenMet = prereq[course].every((pre) => completed.has(pre));
            if (!completed.has(course) && everyPreBeenMet) {
                completed.add(course);
                eligibleCourseExists = true;
            }
        }
    }
    return completed.size === totalCourse;
        
};